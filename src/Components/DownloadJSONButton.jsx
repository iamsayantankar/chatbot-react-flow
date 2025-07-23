import React from 'react';
import { useReactFlow } from 'reactflow';

function DownloadJSONButton ()
{
  const { getNodes, getEdges } = useReactFlow();

  const onClick = () =>
  {
    const nodes = getNodes();
    const edges = getEdges();

    const flowData = {
      nodes: nodes.map( node =>
      {
        // Customize node data for export if needed, otherwise return the node as is
        if ( node.type === 'node' )
        {
          return {
            id: node.id,
            type: node.type,
            position: node.position,
            data: {
              preview_url: node.data.preview_url,
              body: node.data.label,
            },
          };
        } else if ( node.type === 'buttonReply' )
        {
          return {
            id: node.id,
            type: node.type,
            position: node.position,
            data: {
              type: 'BUTTON',
              header: {
                type: 'TEXT',
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
                  type: 'REPLY',
                  reply: {
                    id: `button-${ i }`,
                    title: button.text,
                  },
                } ) ),
              },
            },
          };
        }
        return node; // Return other node types as is
      } ),
      edges: edges,
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent( JSON.stringify( flowData, null, 2 ) );
    const downloadAnchorNode = document.createElement( 'a' );
    downloadAnchorNode.setAttribute( "href", dataStr );
    downloadAnchorNode.setAttribute( "download", "flow.json" );
    document.body.appendChild( downloadAnchorNode ); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <button className="download-btn" onClick={ onClick }>
      Download JSON
    </button>
  );
}

export default DownloadJSONButton;
