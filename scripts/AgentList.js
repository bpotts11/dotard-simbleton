import { Agent } from "./Agent.js";
import { useAgents } from "./BusinessProvider.js";

export const AgentList = () => {
    const contentTarget = document.querySelector(".agents")
    const agentArray = useAgents
    contentTarget.innerHTML = "<h2>Purchasing Agents</h2>"

    agentArray.forEach(
        (agentObject) => {
            contentTarget.innerHTML += Agent(agentObject)
        }
    )
}

const companySearchResultArticle = document.querySelector(".foundAgents")

document
    .querySelector("#agentSearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.
            */
            const agentArray = useAgents
            const foundAgent =
                agentArray.find(agent => agent.fullName.includes(keyPressEvent.target.value))

            companySearchResultArticle.innerHTML = `
            <section class="agent">
                <h3 class="agent__name">${foundAgent.fullName} </h3>
                <p>${foundAgent.company}</p>
                <p>${foundAgent.phoneNumber}</p>
            </section>
            `;
        }
    });