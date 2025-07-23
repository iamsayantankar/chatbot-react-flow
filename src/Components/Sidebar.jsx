import { BsChatText } from "react-icons/bs";
const Sidebar = () =>
{
  // Function to handle the drag start event and set the drag data
  const onDragStart = ( event, nodeType ) =>
  {
    event.dataTransfer.setData( "application/reactflow", nodeType );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <>
      <aside>
        {/* Draggable node */ }
        <div
          className="appnode"
          onDragStart={ ( event ) => onDragStart( event, "default" ) }
          draggable
        >
          <BsChatText style={ { fontSize: "15px", margin: "5px" } } />
          Message
        </div>
        <div
          className="appnode"
          onDragStart={ ( event ) => onDragStart( event, "buttonReply" ) }
          draggable
        >
          <BsChatText style={ { fontSize: "15px", margin: "5px" } } />
          Button Reply
        </div>
        <div
          className="appnode"
          onDragStart={ ( event ) => onDragStart( event, "buttonUrlMessage" ) }
          draggable
        >
          <BsChatText style={ { fontSize: "15px", margin: "5px" } } />
          Button URL Message
        </div>
        <div
          className="appnode"
          onDragStart={ ( event ) => onDragStart( event, "locationRequestMessage" ) }
          draggable
        >
          <BsChatText style={ { fontSize: "15px", margin: "5px" } } />
          Location Request Message
        </div>
        <div
          className="appnode"
          onDragStart={ ( event ) => onDragStart( event, "addressMessage" ) }
          draggable
        >
          <BsChatText style={ { fontSize: "15px", margin: "5px" } } />
          Address Message
        </div>
        <div
          className="appnode"
          onDragStart={ ( event ) => onDragStart( event, "locationMessage" ) }
          draggable
        >
          <BsChatText style={ { fontSize: "15px", margin: "5px" } } />
          Location Message
        </div>
        <div
          className="appnode"
          onDragStart={ ( event ) => onDragStart( event, "documentMessage" ) }
          draggable
        >
          <BsChatText style={ { fontSize: "15px", margin: "5px" } } />
          Document Message
        </div>
        <div
          className="appnode"
          onDragStart={ ( event ) => onDragStart( event, "imageMessage" ) }
          draggable
        >
          <BsChatText style={ { fontSize: "15px", margin: "5px" } } />
          Image Message
        </div>
        <div
          className="appnode"
          onDragStart={ ( event ) => onDragStart( event, "audioMessage" ) }
          draggable
        >
          <BsChatText style={ { fontSize: "15px", margin: "5px" } } />
          Audio Message
        </div>
        <div
          className="appnode"
          onDragStart={ ( event ) => onDragStart( event, "videoMessage" ) }
          draggable
        >
          <BsChatText style={ { fontSize: "15px", margin: "5px" } } />
          Video Message
        </div>

      </aside>
    </>
  );
};

export default Sidebar;
