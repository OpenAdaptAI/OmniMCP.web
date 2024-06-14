import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows, faApple } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import styles from './Developers.module.css';
import { getReleasesDownloadCount } from 'utils/githubStats';

export default function Developers() {
    const [latestRelease, setLatestRelease] = useState(null);
    const [downloadCount, setDownloadCount] = useState({ windows: 0, mac: 0 });
    const macURL = latestRelease
        ? `https://github.com/OpenAdaptAI/OpenAdapt/releases/download/${latestRelease}/OpenAdapt-${latestRelease}.app.zip`
        : '';
    const windowsURL = latestRelease
        ? `https://github.com/OpenAdaptAI/OpenAdapt/releases/download/${latestRelease}/OpenAdapt-${latestRelease}.zip`
        : '';

    useEffect(() => {
        fetch('https://api.github.com/repos/OpenAdaptAI/OpenAdapt/releases/latest')
            .then(response => response.json())
            .then(data => {
                setLatestRelease(data.name);
            });
        getReleasesDownloadCount().then(({ windowsDownloadCount, macDownloadCount }) => {
            setDownloadCount({
                windows: windowsDownloadCount,
                mac: macDownloadCount,
            });
        });
    }, []);

    const handleDownloadClick = (os, url) => {
        const fileName = url.split('/').pop();

        // Track the download start
        window.gtag('event', 'download_start', {
            event_category: 'Software Downloads',
            event_action: `Download Initiated ${os}`,
            event_label: fileName,
            value: 1
        });

        // Proceed to download the file
        downloadFile(url, os, fileName);
    }

    const downloadFile = async (url, os, fileName) => {
        try {
            const response = await fetch(url);
            if (response.ok) {
                // Track the successful download
                window.gtag('event', 'download_success', {
                    event_category: 'Software Downloads',
                    event_action: `Download Successful ${os}`,
                    event_label: fileName,
                    value: 1
                });
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('Download failed:', error);
            // Track the failed download
            window.gtag('event', 'download_failure', {
                event_category: 'Software Downloads',
                event_action: `Download Failed ${os}`,
                event_label: fileName,
                value: 0
            });
        }
    }

    // TODO: Connect to the GitHub API to dynamically check and update the showBuildWarning state based on latest release status
    const showBuildWarning = true; // Set this to false once the issue is resolved
    
    return (
        <div className={styles.row} id="start">
            <div className="relative flex items-center justify-center mx-20 md-12">
                <div className="grid grid-cols-1 break-words">
                    {showBuildWarning && (
                        <div className="bg-yellow-600 text-white text-center p-4">
                            Warning: The current version has a known issue and may not function as expected. Please check back later for updates.
                        </div>
                    )}
                    <h2 id="start" className="text-2xl mt-10 mb-5 font-light text-center">
                        Getting Started
                    </h2>
                    <p className="font-light mb-6 mx-auto">
                        Note: OpenAdapt is Alpha software. This means it is in
                        the early stages of development and may contain bugs,
                        incomplete features, and other issues. Users should
                        exercise caution and understand that the software is
                        provided "as-is" without any guarantees or warranties.
                        We appreciate your feedback and contributions to help
                        improve the project. For more information and to support
                        our development, please visit our{' '}
                        <a href="https://github.com/sponsors/OpenAdaptAI">
                            GitHub sponsors page.
                        </a>
                    </p>
                    <div className="flex flex-col gap-10 justify-center items-center sm:flex-row">
                        <Link
                            className="w-fit flex flex-col gap-y-6 h-fit btn btn-primary hover:no-underline mb-6 py-8"
                            href={windowsURL}
                            onClick={() => handleDownloadClick('Windows', windowsURL)}
                        >
                            <FontAwesomeIcon
                                icon={faWindows}
                                className="text-[96px]"
                            />
                            <span className="text-2xl">
                                Download for Windows
                            </span>
                            {downloadCount.windows > 0 && (
                                <span className="text-lg">
                                    {downloadCount.windows} downloads
                                </span>
                            )}
                        </Link>
                        <Link
                            className="px-8 w-fit flex flex-col gap-y-6 h-fit btn btn-primary hover:no-underline mb-6 py-8 sm:px-6"
                            href={macURL}
                            onClick={() => handleDownloadClick('MacOS', macURL)}
                        >
                            <FontAwesomeIcon
                                icon={faApple}
                                style={{ fontSize: 96 }}
                            />
                            <span className="text-2xl">Download for MacOS</span>
                            {downloadCount.mac > 0 && (
                                <span className="text-lg">
                                    {downloadCount.mac} downloads
                                </span>
                            )}
                        </Link>
                    </div>
                    <iframe
                        src="https://github.com/sponsors/OpenAdaptAI/button"
                        title="Sponsor OpenAdaptAI"
                        height="32"
                        width="114"
                        style={{ border: '0', borderRadius: '6px' }}
                        className="mx-auto mb-4"
                    ></iframe>
                    <p className="text-center">
                        Don't forget to{' '}
                        <a href="#register">Register for Updates</a>.
                    </p>
                    <p className="text-center">Comfortable on the command line? Read on:</p>
                    <h2 id="start" className="text-2xl mt-10 font-light mb-5">
                        Getting Started for Developers
                    </h2>
                    <p>
                        Note: If you run into trouble with the scripted
                        installation described here, please refer to{' '}
                        <a href="https://github.com/OpenAdaptAI/OpenAdapt?tab=readme-ov-file#manual-setup">
                            Manual Setup
                        </a>{' '}
                        instructions.
                    </p>
                    <h3 className="my-3">
                        <FontAwesomeIcon
                            icon={faWindows}
                            className="text-3xl mr-4"
                        />
                        <b>Windows</b>
                    </h3>
                    <ul className="mt-2 list-disc list-inside font-light">
                        <li>
                            Press Windows Key, type "powershell", and press
                            Enter
                        </li>
                        <li>
                            Copy and paste the following command into the
                            terminal, and press Enter (If Prompted for `User
                            Account Control`, click 'Yes'):
                        </li>
                    </ul>
                    <pre
                        className="whitespace-pre-wrap code text-slate-600 bg-slate-100 p-3 m-2"
                        style={{ backgroundColor: '#f8f6ff' }}
                    >
                        Start-Process powershell -Verb RunAs -ArgumentList
                        '-NoExit', '-ExecutionPolicy', 'Bypass', '-Command',
                        "iwr -UseBasicParsing -Uri
                        'https://raw.githubusercontent.com/OpenAdaptAI/OpenAdapt/main/install/install_openadapt.ps1'
                        | Invoke-Expression"
                    </pre>
                    <h3 className="my-3">
                        <FontAwesomeIcon
                            icon={faApple}
                            className="text-3xl mr-4"
                        />
                        <b>MacOS</b>
                    </h3>
                    <ul className="mt-2 list-disc list-inside font-light">
                        <li>
                            Press Command+Space, type "terminal", and press
                            Enter
                        </li>
                        <li>
                            Copy and paste the following command into the
                            terminal, and press Enter:
                        </li>
                    </ul>
                    <pre
                        className="whitespace-pre-wrap code text-slate-600 bg-slate-100 p-3 m-2"
                        style={{ backgroundColor: '#f8f6ff' }}
                    >
                        /bin/bash -c "$(curl -fsSL
                        https://raw.githubusercontent.com/OpenAdaptAI/OpenAdapt/HEAD/install/install_openadapt.sh)"
                    </pre>
                    <h2 className="text-2xl mt-10 font-light">What's Next?</h2>
                    <ul className={`${styles.noBullets} mt-2 font-light`}>
                        <li className="mt-2 font-light">
                            <a
                                className="font-medium hover:underline"
                                href="https://discord.gg/yF527cQbDG"
                                style={{
                                    color: '#FFF',
                                    backgroundColor: '#560DF8',
                                    padding: '10px',
                                    display: 'inline-block',
                                    margin: '5px',
                                }}
                            >
                                Join our Discord
                            </a>
                        </li>
                        <li className="mt-2 font-light">
                            <a
                                className="font-medium hover:underline"
                                href="https://github.com/OpenAdaptAI/OpenAdapt#usage"
                                style={{
                                    color: '#FFF',
                                    backgroundColor: '#560DF8',
                                    padding: '10px',
                                    display: 'inline-block',
                                    margin: '5px',
                                }}
                            >
                                Read our Usage Instructions on Github
                            </a>
                        </li>
                        <li className="mt-2 font-light">
                            <a
                                className="font-medium hover:underline"
                                href="https://openadapt.gitbook.io/openadapt.ai/"
                                style={{
                                    color: '#FFF',
                                    backgroundColor: '#560DF8',
                                    padding: '10px',
                                    display: 'inline-block',
                                    margin: '5px',
                                }}
                            >
                                Read our Documentation on Gitbook
                            </a>
                        </li>
                    </ul>
                    <h2 className="text-2xl mt-10 font-light">
                        Troubleshooting
                    </h2>
                    <ul className={`${styles.noBullets} mt-2 font-light`}>
                        <li className="mt-2 font-light">
                            <a
                                className="font-medium hover:underline"
                                href="https://github.com/OpenAdaptAI/OpenAdapt/issues/new/choose"
                                style={{
                                    color: '#FFF',
                                    backgroundColor: '#560DF8',
                                    padding: '10px',
                                    display: 'inline-block',
                                    margin: '5px',
                                }}
                            >
                                Please submit a Github Issue 🙏
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
