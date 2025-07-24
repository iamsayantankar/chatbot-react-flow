import { useState, useRef, useCallback, useMemo } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";
import Sidebar from "./Components/Sidebar";
import UpdateNode from "./Components/updates/UpdateNode";
import Notification from "./Components/Notification";
import ButtonReplyNode from "./Components/nodes/ButtonReplyNode";
import NormalMessageNode from "./Components/nodes/NormalMessageNode";
import ButtonUrlMessageNode from "./Components/nodes/ButtonUrlMessageNode";
import LocationRequestMessageNode from "./Components/nodes/LocationRequestMessageNode";
import LocationMessageNode from "./Components/nodes/LocationMessageNode";
import DocumentMessageNode from "./Components/nodes/DocumentMessageNode";
import ImageMessageNode from "./Components/nodes/ImageMessageNode";
import AudioMessageNode from "./Components/nodes/AudioMessageNode";
import VideoMessageNode from "./Components/nodes/VideoMessageNode";
import AddressMessageNode from "./Components/nodes/AddressMessageNode";
import ApiCallNode from "./Components/nodes/ApiCallNode";
import "./index.css";
import Topbar from "./Components/Topbar";
import DownloadButton from "./Components/DownloadButton";
import DownloadJSONButton from "./Components/DownloadJSONButton";

let id = 1; // ID counter for new nodes

const initialNodes = [
  {
    id: "node_0",
    type: "node",
    data: { label: "{{dynamic}}", heading: "Send Message" },
    position: { x: 250, y: 5 },
  },
];

const App = () =>
{
  const reactFlowWrapper = useRef( null ); // Reference to the React Flow wrapper
  const [ nodes, setNodes, onNodesChange ] = useNodesState( initialNodes ); // State for managing nodes
  const [ edges, setEdges, onEdgesChange ] = useEdgesState( [] ); // State for managing edges
  const [ reactFlowInstance, setReactFlowInstance ] = useState( null ); // React Flow instance
  const [ nodeSelected, setNodeSelected ] = useState( false ); // State to track if a node is selected
  const [ changeNode, setChangeNode ] = useState( null ); // State to track the node being updated
  const [ errorMessage, setErrorMessage ] = useState( null ); // State for custom error message notification
  const [ messageColor, setMessageColor ] = useState( null ); // State for custom color for error & success notification
  const [ targetHandles, setTargetHandles ] = useState( [] ); // State to track target handles when new edges are created between nodes
  const firstNodeId = useRef( null ); // Track the first node's ID

  // Function to handle node selection
  const update = useCallback( ( event, node ) =>
  {
    setChangeNode( node );
    setNodeSelected( true );
  }, [] );

  // Function to handle new connections (edges) between nodes
  const onConnect = useCallback(
    ( params ) =>
    {
      const sourceNode = nodes.find( ( node ) => node.id === params.source );



      setEdges( ( eds ) =>
        addEdge( { ...params, markerEnd: { type: "arrowclosed" } }, eds )
      );
    },
    [ edges, nodes, setEdges ]
  );

  // Function to handle drag over event
  const onDragOver = useCallback( ( event ) =>
  {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, [] );

  // Function to handle drop event
  const onDrop = useCallback(
    ( event ) =>
    {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData( "application/reactflow" );

      // Check if the dropped element is valid
      if ( typeof type === "undefined" || !type )
      {
        return;
      }

      const position = reactFlowInstance.project( {
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      } );

      // Creating a new node
      let newNode;
      if ( type === "buttonReply" )
      {
        newNode = {
          id: `node_${ id }`,
          type: "buttonReply",
          position,
          data: {
            heading: "",
            label: "",
            buttons: [],
            footer: "",
          },
        };
      } else if ( type === "buttonUrlMessage" )
      {
        newNode = {
          id: `node_${ id }`,
          type: "buttonUrlMessage",
          position,
          data: {
            headerText: "",
            bodyText: "",
            footerText: "",
            displayText: "",
            url: "",
          },
        };
      } else if ( type === "locationRequestMessage" )
      {
        newNode = {
          id: `node_${ id }`,
          type: "locationRequestMessage",
          position,
          data: {
            bodyText: "",
          },
        };
      } else if ( type === "locationMessage" )
      {
        newNode = {
          id: `node_${ id }`,
          type: "locationMessage",
          position,
          data: {
            latitude: "",
            longitude: "",
            name: "",
            address: "",
          },
        };
      } else if ( type === "documentMessage" )
      {
        newNode = {
          id: `node_${ id }`,
          type: "documentMessage",
          position,
          data: {
            link: "",
            caption: "",
            filename: "",
          },
        };
      } else if ( type === "imageMessage" )
      {
        newNode = {
          id: `node_${ id }`,
          type: "imageMessage",
          position,
          data: {
            link: "",
            caption: "",
          },
        };
      } else if ( type === "audioMessage" )
      {
        newNode = {
          id: `node_${ id }`,
          type: "audioMessage",
          position,
          data: {
            link: "",
          },
        };
      } else if ( type === "videoMessage" )
      {
        newNode = {
          id: `node_${ id }`,
          type: "videoMessage",
          position,
          data: {
            link: "",
            caption: "",
          },
        };
      } else if ( type === "addressMessage" )
      {
        newNode = {
          id: `node_${ id }`,
          type: "addressMessage",
          position,
          data: {
            country: "",
            saved_addresses: [
              {
                id: "address1",
                value: {
                  name: "",
                  phone_number: "",
                  in_pin_code: "",
                  floor_number: "",
                  building_name: "",
                  address: "",
                  landmark_area: "",
                  city: "",
                },
              },
            ],
          },
        };
      } else if ( type === "apiCall" )
      {
        newNode = {
          id: `node_${ id }`,
          type: "apiCall",
          position,
          data: {
            url: "",
            method: "GET",
            body: "",
          },
        };
      } else
      {
        newNode = {
          id: `node_${ id }`,
          type: "node",
          position,
          data: { heading: "Send Message", label: "", preview_url: true },
        };
      }

      // Set the first node's ID if it's the first node
      if ( id === 1 )
      {
        firstNodeId.current = newNode.id;
      }

      id++;
      setNodes( ( nds ) => nds.concat( newNode ) );
    },
    [ reactFlowInstance, setNodes ]
  );

  // Hide the React Flow attribution for personal/hobby projects
  const proOptions = { hideAttribution: true };

  // Custom node types with header and label
  const nodeTypes = useMemo(
    () => ( {
      node: NormalMessageNode,
      buttonReply: ButtonReplyNode,
      buttonUrlMessage: ButtonUrlMessageNode,
      locationRequestMessage: LocationRequestMessageNode,
      locationMessage: LocationMessageNode,
      documentMessage: DocumentMessageNode,
      imageMessage: ImageMessageNode,
      audioMessage: AudioMessageNode,
      videoMessage: VideoMessageNode,
      addressMessage: AddressMessageNode,
      apiCall: ApiCallNode,
    } ),
    []
  );

  // Function to save the node flow and validate connections
  const saveFlow = () =>
  {
    const nodes = reactFlowInstance.getNodes();
    const edges = reactFlowInstance.getEdges();

    const unconnectedNodes = nodes.filter(
      ( node ) =>
        !edges.some( ( edge ) => edge.target === node.id ) && node.id !== "node_0"
    );

    if ( unconnectedNodes.length > 0 )
    {
      setErrorMessage( "Cannot save Flow: There are unconnected nodes." );
      setMessageColor( "redMessage" );
      setTimeout( () =>
      {
        setErrorMessage( null );
      }, 5000 );
    } else
    {
      setErrorMessage( "Saved Flow" );
      setMessageColor( "greenMessage" );
      setTimeout( () =>
      {
        setErrorMessage( null );
      }, 5000 );

      const flowData = nodes.reduce( ( acc, node ) =>
      {
        if ( node.id === 'node_0' ) return acc;

        if ( node.type === 'node' )
        {
          acc[ node.id ] = {
            preview_url: node.data.preview_url,
            body: node.data.label,
          };
        } else if ( node.type === 'buttonReply' )
        {
          acc[ node.id ] = {
            type: 'button',
            header: {
              type: 'text',
              text: node.data.heading,
            },
            body: {
              text: node.data.label,
            },
            footer: {
              text: node.data.footer,
            },
            action: {
              buttons: node.data.buttons.map( ( button, i ) => ( {
                type: 'reply',
                reply: {
                  id: `button-${ i }`,
                  title: button.text,
                },
              } ) ),
            },
          };
        } else if ( node.type === 'buttonUrlMessage' )
        {
          acc[ node.id ] = {
            type: 'cta_url',
            header: {
              type: 'text',
              text: node.data.headerText,
            },
            body: {
              text: node.data.bodyText,
            },
            footer: {
              text: node.data.footerText,
            },
            action: {
              name: 'cta_url',
              parameters: {
                display_text: node.data.displayText,
                url: node.data.url,
              },
            },
          };
        } else if ( node.type === 'locationRequestMessage' )
        {
          acc[ node.id ] = {
            type: 'location_request_message',
            body: {
              text: node.data.bodyText,
            },
            action: {
              name: 'send_location',
            },
          };
        } else if ( node.type === 'locationMessage' )
        {
          acc[ node.id ] = {
            type: 'location',
            latitude: node.data.latitude,
            longitude: node.data.longitude,
            name: node.data.name,
            address: node.data.address,
          };
        } else if ( node.type === 'documentMessage' )
        {
          acc[ node.id ] = {
            type: 'document',
            link: node.data.link,
            caption: node.data.caption,
            filename: node.data.filename,
          };
        } else if ( node.type === 'imageMessage' )
        {
          acc[ node.id ] = {
            type: 'image',
            link: node.data.link,
            caption: node.data.caption,
          };
        } else if ( node.type === 'audioMessage' )
        {
          acc[ node.id ] = {
            type: 'audio',
            link: node.data.link,
          };
        } else if ( node.type === 'videoMessage' )
        {
          acc[ node.id ] = {
            type: 'video',
            link: node.data.link,
            caption: node.data.caption,
          };
        } else if ( node.type === 'addressMessage' )
        {
          acc[ node.id ] = {
            name: 'address_message',
            parameters: {
              country: node.data.country,
              saved_addresses: node.data.saved_addresses.map( addr => ( {
                id: addr.id,
                value: {
                  name: addr.value.name,
                  phone_number: addr.value.phone_number,
                  in_pin_code: addr.value.in_pin_code,
                  floor_number: addr.value.floor_number,
                  building_name: addr.value.building_name,
                  address: addr.value.address,
                  landmark_area: addr.value.landmark_area,
                  city: addr.value.city,
                },
              } ) ),
            },
          };
        } else if ( node.type === 'apiCall' )
        {
          acc[ node.id ] = {
            type: 'api_call',
            url: node.data.url,
            method: node.data.method,
            body: node.data.body,
          };
        }

        return acc;
      }, {} );

      console.log( JSON.stringify( flowData, null, 2 ) );
    }
  };

  function nodeColor ( node )
  {
    switch ( node.type )
    {
      case "input":
        return "#6ede87";
      case "output":
        return "#6865A5";
      default:
        return "#ff0072";
    }
  }

  return (
    <div style={ { display: 'flex', flexDirection: 'column', width: "100vw", height: "100vh" } }>
      <ReactFlowProvider>
        <div style={ { width: '100%', height: '10%', backgroundColor: '#f3f3f3' } }>
          <Topbar saveFlow={ saveFlow } />
        </div>
        <div className="appflow" style={ { width: '100%', height: '90%', display: 'flex', flexDirection: 'row' } }>
          <div className="reactflow-wrapper" ref={ reactFlowWrapper } style={ { flexGrow: 1 } }>
            {/* <div className="topbar">
              <Notification
                errorMessage={ errorMessage }
                messageColor={ messageColor }
              />
            </div> */}
            <ReactFlow
              nodes={ nodes }
              edges={ edges }
              onNodesChange={ onNodesChange }
              onEdgesChange={ onEdgesChange }
              onConnect={ onConnect }
              onInit={ setReactFlowInstance }
              onDrop={ onDrop }
              onDragOver={ onDragOver }
              fitView
              proOptions={ proOptions }
              onNodeClick={ update }
              nodeTypes={ nodeTypes }
            >
              <Controls />
            </ReactFlow>
          </div>

          <div className="rightbar" style={ { position: 'relative' } }>
            <div className="sidebar-content">
              { nodeSelected ? (
                <UpdateNode
                  selectedNode={ changeNode }
                  setNodeSelected={ setNodeSelected }
                  setNodes={ setNodes }
                />
              ) : (
                <Sidebar />
              ) }
            </div>
            <div style={ { position: 'absolute', bottom: 10, left: '0%', transform: 'translateX(-50%)' } }>
              <MiniMap nodeColor={ nodeColor } />
            </div>
          </div>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default App;
