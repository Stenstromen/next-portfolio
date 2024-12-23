"use client";

import React, { useState } from "react";

function K8s() {
  const [openSection, setOpenSection] = useState(0);

  return (
    <div className="min-h-screen bg-[#4f5d75]/80 py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-[#4f5d75]/80 mx-[10%] my-[2%] overflow-x-hidden transform transition-all duration-1000 ease-in-out">
        <div className="divide-y divide-gray-200">
          {/* Section 1 - Mastering Kubectl */}
          <div className="border-b border-gray-200">
            <button
              className="w-full py-4 px-6 text-left focus:outline-none"
              onClick={() => setOpenSection(openSection === 0 ? -1 : 0)}
            >
              <div className="flex items-center">
                <span className="font-bold">
                  1.&nbsp;
                  <span className="underline">
                    Mastering Kubectl [kjub-cuttle]
                  </span>
                </span>
              </div>
            </button>

            <div
              className={`px-6 pb-4 ${openSection === 0 ? "block" : "hidden"}`}
            >
              <p className="italic mb-2">Useful Shorthands and Timesavers</p>
              <pre className="bg-black text-green-500 p-2 rounded mb-4">
                alias k=&apos;kubectl&apos;
                <br />
                alias kga=&apos;k get pods -A&apos;
                <br />
                alias ktopmem=&apos;k top pods --sort-by memory&apos;
                <br />
                alias ktopcpu=&apos;k top pods --sort-by cpu&apos;
                <br />
              </pre>

              <p className="italic mb-2">Fetch YAML</p>
              <pre className="bg-black text-green-500 p-2 rounded mb-4">
                ~$ k get deployments.apps flowerapi -o yaml
                <br />
                # To file
                <br />
                ~$ k get deployments.apps nchat -o yaml &gt; deployment.yaml
              </pre>

              <p className="italic mb-2">Generate YAML</p>
              <pre className="bg-black text-green-500 p-2 rounded">
                ~$ k create deployment frontend --image=nginx --dry-run=client
                --output=yaml
                <br />
                # To file
                <br />
                ~$ k create deployment backend --image=mariadb --dry-run=client
                --output=yaml &gt; backend.yaml
              </pre>
            </div>
          </div>

          {/* Section 2 - KubeContext */}
          <div className="border-b border-gray-200">
            <button
              className="w-full py-4 px-6 text-left focus:outline-none"
              onClick={() => setOpenSection(openSection === 1 ? -1 : 1)}
            >
              <div className="flex items-center">
                <span className="font-bold">
                  2.&nbsp;
                  <span className="underline">KubeContext</span>
                </span>
              </div>
            </button>

            <div
              className={`px-6 pb-4 ${openSection === 1 ? "block" : "hidden"}`}
            >
              <p className="italic mb-2">Context Switching - The Hard Way</p>
              <pre className="bg-black text-green-500 p-2 rounded mb-4">
                ~$ k config get-contexts ...
                <br />
                ~$ k config use-context CONTEXT
              </pre>

              <p className="italic mb-2">KubeCTX by ahmetb</p>
              <a
                href="https://github.com/ahmetb/kubectx"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:text-blue-700 mb-2 block"
              >
                github.com/ahmetb/kubectx
              </a>
              <pre className="bg-black text-green-500 p-2 rounded">
                ~$ brew install kubectx # Set default namespace for context
                <br />
                ~$ kubens miniomatic
              </pre>
            </div>
          </div>

          {/* Section 3 - Kubecolor */}
          <div className="border-b border-gray-200">
            <button
              className="w-full py-4 px-6 text-left focus:outline-none"
              onClick={() => setOpenSection(openSection === 2 ? -1 : 2)}
            >
              <div className="flex items-center">
                <span className="font-bold">
                  3.&nbsp;
                  <span className="underline">Kubecolor</span>
                </span>
              </div>
            </button>

            <div
              className={`px-6 pb-4 ${openSection === 2 ? "block" : "hidden"}`}
            >
              <p className="italic mb-2">KubeColor by hidetatz</p>
              <div className="mb-2">
                Kubectl in <span>c</span>
                <span className="text-blue-500">o</span>
                <span className="text-red-500">l</span>
                <span className="text-green-500">o</span>
                <span className="text-gray-500">r</span>
              </div>
              <a
                href="https://github.com/hidetatz/kubecolor"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:text-blue-700 mb-2 block"
              >
                github.com/hidetatz/kubecolor
              </a>
              <pre className="bg-black text-green-500 p-2 rounded">
                ~$ brew install hidetatz/tap/kubecolor
                <br />
                ~$ alias kubectl=&apos;kubecolor&apos;
              </pre>
            </div>
          </div>

          {/* Section 4 - Kube Logs */}
          <div className="border-b border-gray-200">
            <button
              className="w-full py-4 px-6 text-left focus:outline-none"
              onClick={() => setOpenSection(openSection === 3 ? -1 : 3)}
            >
              <div className="flex items-center">
                <span className="font-bold">
                  4.&nbsp;
                  <span className="underline">Kube Logs</span>
                </span>
              </div>
            </button>

            <div
              className={`px-6 pb-4 ${openSection === 3 ? "block" : "hidden"}`}
            >
              <p className="italic mb-2">Kubetail by johanhaleby</p>
              <pre className="bg-black text-green-500 p-2 rounded mb-2">
                tail -f *.log
              </pre>
              <p className="mb-2">for Kubernetes</p>
              <a
                href="https://github.com/johanhaleby/kubetail"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:text-blue-700 mb-2 block"
              >
                github.com/johanhaleby/kubetail
              </a>
              <pre className="bg-black text-green-500 p-2 rounded">
                ~$ brew install johanhaleby/tap/kubetail
              </pre>
            </div>
          </div>

          {/* Section 5 - Krew Kubectl Plugins */}
          <div className="border-b border-gray-200">
            <button
              className="w-full py-4 px-6 text-left focus:outline-none"
              onClick={() => setOpenSection(openSection === 4 ? -1 : 4)}
            >
              <div className="flex items-center">
                <span className="font-bold">
                  5.&nbsp;
                  <span className="underline">Krew Kubectl Plugins</span>
                </span>
              </div>
            </button>

            <div
              className={`px-6 pb-4 ${openSection === 4 ? "block" : "hidden"}`}
            >
              <div className="mb-6">
                <p className="italic mb-2">Neat</p>
                <pre className="bg-black text-green-500 p-2 rounded mb-2">
                  ~$ kubectl krew install neat
                </pre>
                <a
                  href="https://github.com/itaysk/kubectl-neat"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:text-blue-700 mb-2 block"
                >
                  github.com/itaysk/kubectl-neat
                </a>
                <p className="mb-4">
                  Remove clutter from Kubernetes manifests to make them more
                  readable.
                </p>
              </div>

              <div className="mb-6">
                <p className="italic mb-2">Ktop</p>
                <pre className="bg-black text-green-500 p-2 rounded mb-2">
                  ~$ kubectl krew install ktop
                </pre>
                <a
                  href="https://github.com/vladimirvivien/ktop"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:text-blue-700 mb-2 block"
                >
                  github.com/vladimirvivien/ktop
                </a>
                <p className="mb-4">
                  Displays useful metrics information about nodes, pods, and
                  other workload resources running in a Kubernetes cluster.
                </p>
              </div>

              <div className="mb-6">
                <p className="italic mb-2">Kopilot</p>
                <pre className="bg-black text-green-500 p-2 rounded mb-2">
                  ~$ kubectl krew install kopilot
                </pre>
                <a
                  href="https://github.com/knight42/kopilot"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:text-blue-700 mb-2 block"
                >
                  github.com/knight42/kopilot
                </a>
                <p className="mb-2">Your AI Kubernetes Expert</p>
                <p className="mb-4">Uses GPT-3.5-turbo from OpenAI</p>
              </div>

              <div>
                <p className="italic mb-2">
                  Custom shorthand, &quot;desc&quot;
                </p>
                <pre className="bg-black text-green-500 p-2 rounded mb-2">
                  /usr/local/bin/kubectl-desc
                </pre>
                <p className="mb-2">Shorthand for &quot;describe&quot;</p>
                <p className="mb-2">Simple shell script</p>
                <p className="mb-2">
                  Only append &quot;kubectl-&quot; to custom script
                </p>
                <pre className="bg-black text-green-500 p-2 rounded">
                  #!/bin/sh exec kubectl describe $@
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default K8s;
