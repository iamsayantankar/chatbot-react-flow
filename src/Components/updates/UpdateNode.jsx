import { useState, useEffect } from "react";
// import { useReactFlow } from 'reactflow';
import { GoArrowLeft } from "react-icons/go";

// Component to update the selected node
const UpdateNode = ({
  selectedNode,
  setNodeSelected,
  setNodes,
  setNewNodeLabel,
}) => {
  // State to manage the node's name
  const [nodeName, setNodeName] = useState(selectedNode.data["label"]);
  const [buttons, setButtons] = useState(selectedNode.data["buttons"]);
  // const reactFlowInstance = useReactFlow();
  // console.log(reactFlowInstance.getNodes());
  let id = selectedNode.id;

  useEffect(() => {
    // Update the nodeName state when the selected node changes
    setNodeName(selectedNode.data["label"]);
    setButtons(selectedNode.data["buttons"]);
  }, [id]);

  // Update the node data in the nodes state whenever nodeName changes
  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === selectedNode.id) {
          // Create a new object to notify React Flow about the change
          node.data = {
            ...node.data,
            label: nodeName,
            buttons: buttons,
          };
        }
        return node;
      })
    );
  }, [selectedNode, nodeName, buttons, setNodes]);

  // Function to switch from the update sidebar to the main node content sidebar
  const mainSidebar = () => {
    setNodeSelected(false);
  };

  return (
    <>
      <div className="update">
        <div className="back">
          <span
            className="material-symbols-outlined"
            style={{ marginRight: 10, cursor: "pointer",color:"#62646b" }}
            onClick={mainSidebar}
          >
           <GoArrowLeft/>
          </span>
          <h2 style={{ paddingLeft: 50, margin: 0 ,color:"#62646b"}}>Message</h2>
        </div>
      </div>
      <div style={{ width: `100%`, height: 2, background: "rgb(214, 212, 212)" }}></div>

      <div className="update">
        <h3>Text</h3>
        <textarea
          rows="4"
          cols="25"
          value={nodeName}
          onChange={(evt) => {
            setNodeName(evt.target.value);
            // setNewNodeLabel(evt.target.value);
          }}
          style={{ marginBottom: 15, borderRadius: 5 }}
        />
        {selectedNode.type === "buttonReply" && (
          <div>
            <h3>Buttons</h3>
            {buttons.map((button, i) => (
              <input
                key={i}
                type="text"
                value={button.text}
                onChange={(evt) => {
                  const newButtons = [...buttons];
                  newButtons[i].text = evt.target.value;
                  setButtons(newButtons);
                }}
                style={{ marginBottom: 5, borderRadius: 5, width: "100%" }}
              />
            ))}
            <button
              onClick={() => setButtons([...buttons, { text: "New Button" }])}
              style={{ marginTop: 10, color: 'black', backgroundColor: '#f0f0f0', border: '1px solid #ccc' }}
            >
              Add Button
            </button>
          </div>
        )}
      </div>
      <div style={{ width: `100%`, height: 2, background: "rgb(214, 212, 212)" }}></div>
    </>
  );
};

export default UpdateNode;
