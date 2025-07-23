import { Handle, Position } from "reactflow";
import { BsChatText } from "react-icons/bs";

const ButtonReplyNode = ( { data } ) =>
{
  return (
    <div>
      <div
        style={ {
          backgroundColor: "#b2f0e3",
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          fontWeight: "bold",
          color: "black",
          paddingLeft: 15,
          paddingTop: 3,
          paddingBottom: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: 275,
          boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        } }
      >
        <div style={ { display: "flex", alignItems: "center" } }>
          <BsChatText
            style={ { fontSize: 13, paddingRight: 7, paddingTop: 5 } }
          />
          { data.heading }
        </div>
        <div style={ { paddingRight: 15 } }>
          <img src="whatsapp.svg" alt="whatsapp icon" height={ 15 } />
        </div>
      </div>
      <div
        style={ {
          padding: 15,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          backgroundColor: "white",
          boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        } }
      >
        <div
          style={ {
            color: "black",
          } }
        >
          { data.label }
        </div>
        { data.buttons &&
          data.buttons.map( ( button, i ) => (
            <div
              key={ i }
              style={ {
                border: "1px solid #ddd",
                borderRadius: 5,
                padding: 8,
                marginTop: 5,
                textAlign: "center",
                backgroundColor: "#1DBA0EFF",
                position: "relative", // Add position relative for absolute positioning of handle
              } }
            >
              { button.text }
              <Handle
                type="source"
                position={Position.Right}
                id={`button-${i}`}
                style={{ background: '#555', right: -5, top: '50%', transform: 'translateY(-50%)' }}
              />
            </div>
          ) ) }
      </div>
      <Handle type="target" position={Position.Left} id="target" />
    </div>
  );
};

export default ButtonReplyNode;
