        document.addEventListener("DOMContentLoaded", () => {
            const root = document.getElementById("vento");
            const originalNodes = Array.from(root.childNodes);
            root.innerHTML = "";

            let letterIndex = 0;
            const delayStep = 0.08; // tempo entre letras (em segundos)

            function splitNodeToSpans(node, target) {
                if (node.nodeType === Node.TEXT_NODE) {
                    const text = node.nodeValue;
                    for (const ch of text) {
                        const span = document.createElement("span");
                        span.className = "char";
                        span.textContent = (ch === " ") ? "\u00A0" : ch; // preserva espaço
                        span.style.animationDelay = `${letterIndex * delayStep}s`;
                        target.appendChild(span);
                        letterIndex++;
                    }
                } else if (node.nodeName === "BR") {
                    target.appendChild(document.createElement("br")); // preserva <br>
                } else if (node.nodeType === Node.ELEMENT_NODE) {
                    const el = document.createElement(node.nodeName.toLowerCase());
                    for (const attr of node.attributes || []) {
                        el.setAttribute(attr.name, attr.value);
                    }
                    target.appendChild(el);
                    Array.from(node.childNodes).forEach(child => splitNodeToSpans(child, el));
                }
            }

            originalNodes.forEach(n => splitNodeToSpans(n, root));
        });