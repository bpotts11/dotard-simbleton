import { Agent } from "./Agent.js";
import { useAgents } from "./BusinessProvider.js";

export const AgentList = () => {
    const contentTarget = document.querySelector(".agents")
    const agentArray = useAgents
    contentTarget.innerHTML = "<h2>Purchasing Agent</h2>"

    agentArray.forEach(
        (agentObject) => {
            contentTarget.innerHTML += Agent(agentObject)
        }
    )
}



// export const BusinessList = () => {
//     const contentTarget = document.querySelector(".businessesContainer");
//     const businessArray = useBusinesses()
//     contentTarget.innerHTML = "<h1>Active Businesses</h1>"

//     businessArray.forEach(
//         (businessObject) => {
//             contentTarget.innerHTML += Business(businessObject)
//         }
//     )
// }