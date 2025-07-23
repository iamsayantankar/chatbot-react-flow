import { useState, useEffect } from "react";
// import { useReactFlow } from 'reactflow';
import { GoArrowLeft } from "react-icons/go";

// Component to update the selected node
const UpdateNode = ( {
  selectedNode,
  setNodeSelected,
  setNodes,
  setNewNodeLabel,
} ) =>
{
  // State to manage the node's name
  const [ nodeName, setNodeName ] = useState( selectedNode.data[ "label" ] );
  const [ buttons, setButtons ] = useState( selectedNode.data[ "buttons" ] );
  const [ footer, setFooter ] = useState( selectedNode.data[ "footer" ] );
  const [ previewUrl, setPreviewUrl ] = useState( selectedNode.data[ "preview_url" ] );
  const [ header, setHeader ] = useState( selectedNode.data[ "heading" ] );
  const [ headerText, setHeaderText ] = useState( selectedNode.data[ "headerText" ] );
  const [ bodyText, setBodyText ] = useState( selectedNode.data[ "bodyText" ] );
  const [ footerText, setFooterText ] = useState( selectedNode.data[ "footerText" ] );
  const [ displayText, setDisplayText ] = useState( selectedNode.data[ "displayText" ] );
  const [ url, setUrl ] = useState( selectedNode.data[ "url" ] );
  const [ latitude, setLatitude ] = useState( selectedNode.data[ "latitude" ] );
  const [ longitude, setLongitude ] = useState( selectedNode.data[ "longitude" ] );
  const [ locationName, setLocationName ] = useState( selectedNode.data[ "name" ] );
  const [ address, setAddress ] = useState( selectedNode.data[ "address" ] );
  const [ link, setLink ] = useState( selectedNode.data[ "link" ] );
  const [ caption, setCaption ] = useState( selectedNode.data[ "caption" ] );
  const [ filename, setFilename ] = useState( selectedNode.data[ "filename" ] );
  const [ country, setCountry ] = useState( selectedNode.data.country );
  const [ savedAddressName, setSavedAddressName ] = useState( selectedNode.data.saved_addresses?.[ 0 ]?.value?.name );
  const [ savedAddressPhoneNumber, setSavedAddressPhoneNumber ] = useState( selectedNode.data.saved_addresses?.[ 0 ]?.value?.phone_number );
  const [ savedAddressPincode, setSavedAddressPincode ] = useState( selectedNode.data.saved_addresses?.[ 0 ]?.value?.in_pin_code );
  const [ savedAddressFloorNumber, setSavedAddressFloorNumber ] = useState( selectedNode.data.saved_addresses?.[ 0 ]?.value?.floor_number );
  const [ savedAddressBuildingName, setSavedAddressBuildingName ] = useState( selectedNode.data.saved_addresses?.[ 0 ]?.value?.building_name );
  const [ savedAddressAddress, setSavedAddressAddress ] = useState( selectedNode.data.saved_addresses?.[ 0 ]?.value?.address );
  const [ savedAddressLandmarkArea, setSavedAddressLandmarkArea ] = useState( selectedNode.data.saved_addresses?.[ 0 ]?.value?.landmark_area );
  const [ savedAddressCity, setSavedAddressCity ] = useState( selectedNode.data.saved_addresses?.[ 0 ]?.value?.city );
  // const reactFlowInstance = useReactFlow();
  // console.log(reactFlowInstance.getNodes());
  let id = selectedNode.id;

  useEffect( () =>
  {
    // Update the nodeName state when the selected node changes
    setNodeName( selectedNode.data[ "label" ] );
    setButtons( selectedNode.data[ "buttons" ] );
    setFooter( selectedNode.data[ "footer" ] );
    setPreviewUrl( selectedNode.data[ "preview_url" ] );
    setHeader( selectedNode.data[ "heading" ] );
    setHeaderText( selectedNode.data[ "headerText" ] );
    setBodyText( selectedNode.data[ "bodyText" ] );
    setFooterText( selectedNode.data[ "footerText" ] );
    setDisplayText( selectedNode.data[ "displayText" ] );
    setUrl( selectedNode.data[ "url" ] );
    setLatitude( selectedNode.data[ "latitude" ] );
    setLongitude( selectedNode.data[ "longitude" ] );
    setLocationName( selectedNode.data[ "name" ] );
    setAddress( selectedNode.data[ "address" ] );
    setLink( selectedNode.data[ "link" ] );
    setCaption( selectedNode.data[ "caption" ] );
    setFilename( selectedNode.data[ "filename" ] );
    setCountry( selectedNode.data.country );
    setSavedAddressName( selectedNode.data.saved_addresses?.[ 0 ]?.value?.name );
    setSavedAddressPhoneNumber( selectedNode.data.saved_addresses?.[ 0 ]?.value?.phone_number );
    setSavedAddressPincode( selectedNode.data.saved_addresses?.[ 0 ]?.value?.in_pin_code );
    setSavedAddressFloorNumber( selectedNode.data.saved_addresses?.[ 0 ]?.value?.floor_number );
    setSavedAddressBuildingName( selectedNode.data.saved_addresses?.[ 0 ]?.value?.building_name );
    setSavedAddressAddress( selectedNode.data.saved_addresses?.[ 0 ]?.value?.address );
    setSavedAddressLandmarkArea( selectedNode.data.saved_addresses?.[ 0 ]?.value?.landmark_area );
    setSavedAddressCity( selectedNode.data.saved_addresses?.[ 0 ]?.value?.city );
  }, [ id, selectedNode.data ] );

  // Update the node data in the nodes state whenever nodeName changes
  useEffect( () =>
  {
    setNodes( ( nds ) =>
      nds.map( ( node ) =>
      {
        if ( node.id === selectedNode.id )
        {
          // Create a new object to notify React Flow about the change
          if ( node.type === "node" )
          {
            node.data = {
              ...node.data,
              label: nodeName,
              preview_url: previewUrl,
            };
          } else if ( node.type === "buttonReply" )
          {
            node.data = {
              ...node.data,
              label: nodeName,
              buttons: buttons,
              footer: footer,
              heading: header,
            };
          } else if ( node.type === "buttonUrlMessage" )
          {
            node.data = {
              ...node.data,
              headerText: headerText,
              bodyText: bodyText,
              footerText: footerText,
              displayText: displayText,
              url: url,
            };
          } else if ( node.type === "locationRequestMessage" )
          {
            node.data = {
              ...node.data,
              bodyText: bodyText,
            };
          } else if ( node.type === "addressMessage" )
          {
            node.data = {
              ...node.data,
              bodyText: bodyText,
            };
          } else if ( node.type === "locationMessage" )
          {
            node.data = {
              ...node.data,
              latitude: latitude,
              longitude: longitude,
              name: locationName,
              address: address,
            };
          } else if ( node.type === "documentMessage" )
          {
            node.data = {
              ...node.data,
              link: link,
              caption: caption,
              filename: filename,
            };
          } else if ( node.type === "imageMessage" )
          {
            node.data = {
              ...node.data,
              link: link,
              caption: caption,
            };
          } else if ( node.type === "audioMessage" )
          {
            node.data = {
              ...node.data,
              link: link,
            };
          } else if ( node.type === "videoMessage" )
          {
            node.data = {
              ...node.data,
              link: link,
              caption: caption,
            };
          }
        }
        return node;
      } )
    );
  }, [ selectedNode, nodeName, buttons, footer, previewUrl, header, headerText, bodyText, footerText, displayText, url, latitude, longitude, locationName, address, link, caption, filename, country, savedAddressName, savedAddressPhoneNumber, savedAddressPincode, savedAddressFloorNumber, savedAddressBuildingName, savedAddressAddress, savedAddressLandmarkArea, savedAddressCity, setNodes ] );

  // Function to switch from the update sidebar to the main node content sidebar
  const mainSidebar = () =>
  {
    setNodeSelected( false );
  };

  return (
    <>
      <div className="update">
        <div className="back">
          <span
            className="material-symbols-outlined"
            style={ { marginRight: 10, cursor: "pointer", color: "#62646b" } }
            onClick={ mainSidebar }
          >
            <GoArrowLeft />
          </span>
          <h2 style={ { paddingLeft: 50, margin: 0, color: "#62646b" } }>{ selectedNode.type === "node" ? "Normal Message" : selectedNode.type === "buttonReply" ? "Button Reply Message" : selectedNode.type === "buttonUrlMessage" ? "Button URL Message" : selectedNode.type === "locationRequestMessage" ? "Location Request Message" : selectedNode.type === "locationMessage" ? "Location Message" : "Message" }</h2>
        </div>
      </div>
      <div style={ { width: `100%`, height: 2, background: "rgb(214, 212, 212)" } }></div>

      <div className="update">
        { selectedNode.type === "node" && (
          <>
            <h3>Text</h3>
            <textarea
              rows="4"
              cols="25"
              value={ nodeName }
              onChange={ ( evt ) =>
              {
                setNodeName( evt.target.value );
                // setNewNodeLabel(evt.target.value);
              } }
              style={ { marginBottom: 15, borderRadius: 5 } }
            />
            <div style={ { display: 'flex', alignItems: 'center', marginBottom: 15 } }>
              <h3 style={ { margin: 0, marginRight: 10 } }>Preview URL</h3>
              <label className="switch">
                <input type="checkbox" checked={ previewUrl } onChange={ () => setPreviewUrl( !previewUrl ) } />
                <span className="slider round"></span>
              </label>
            </div>
          </>
        ) }
        { selectedNode.type === "buttonReply" && (
          <div>
            <h3 style={ { marginTop: 0 } }>Header</h3>
            <input
              type="text"
              value={ header }
              onChange={ ( evt ) => setHeader( evt.target.value ) }
              style={ { marginBottom: 5, borderRadius: 5, width: "100%" } }
            />
            <h3 style={ { marginTop: 10 } }>Body</h3>
            <textarea
              rows="4"
              cols="25"
              value={ nodeName }
              onChange={ ( evt ) =>
              {
                setNodeName( evt.target.value );
              } }
              style={ { marginBottom: 15, borderRadius: 5 } }
            />
            <h3 style={ { marginTop: 10 } }>Buttons</h3>
            { buttons.map( ( button, i ) => (
              <input
                key={ i }
                type="text"
                value={ button.text }
                onChange={ ( evt ) =>
                {
                  const newButtons = [ ...buttons ];
                  newButtons[ i ].text = evt.target.value;
                  setButtons( newButtons );
                } }
                style={ { marginBottom: 5, borderRadius: 5, width: "100%" } }
              />
            ) ) }
            <h3 style={ { marginTop: 10 } }>Footer</h3>
            <textarea
              rows="2"
              cols="25"
              value={ footer }
              onChange={ ( evt ) =>
              {
                setFooter( evt.target.value );
              } }
              style={ { marginBottom: 15, borderRadius: 5 } }
            />
            <button
              onClick={ () =>
              {
                if ( buttons.length < 3 )
                {
                  setButtons( [ ...buttons, { text: "New Button" } ] );
                }
              } }
              style={ { marginTop: 10, color: 'black', backgroundColor: '#f0f0f0', border: '1px solid #ccc' } }
              disabled={ buttons.length >= 3 }
            >
              Add Button
            </button>
          </div>
        ) }
        { selectedNode.type === "buttonUrlMessage" && (
          <div>
            <h3 style={ { marginTop: 0 } }>Header Text</h3>
            <input
              type="text"
              value={ headerText }
              onChange={ ( evt ) => setHeaderText( evt.target.value ) }
              style={ { marginBottom: 5, borderRadius: 5, width: "100%" } }
            />
            <h3>Body Text</h3>
            <textarea
              rows="4"
              cols="25"
              value={ bodyText }
              onChange={ ( evt ) => setBodyText( evt.target.value ) }
              style={ { marginBottom: 15, borderRadius: 5 } }
            />
            <h3>Footer Text</h3>
            <input
              type="text"
              value={ footerText }
              onChange={ ( evt ) => setFooterText( evt.target.value ) }
              style={ { marginBottom: 5, borderRadius: 5, width: "100%" } }
            />
            <h3 style={ { marginTop: 10 } }>Display Text (Button)</h3>
            <input
              type="text"
              value={ displayText }
              onChange={ ( evt ) => setDisplayText( evt.target.value ) }
              style={ { marginBottom: 5, borderRadius: 5, width: "100%" } }
            />
            <h3 style={ { marginTop: 10 } }>URL</h3>
            <input
              type="text"
              value={ url }
              onChange={ ( evt ) => setUrl( evt.target.value ) }
              style={ { marginBottom: 5, borderRadius: 5, width: "100%" } }
            />
          </div>
        ) }
        { selectedNode.type === "locationRequestMessage" && (
          <div>
            <h3 style={ { marginTop: 0 } }>Body Text</h3>
            <textarea
              rows="4"
              cols="25"
              value={ bodyText }
              onChange={ ( evt ) => setBodyText( evt.target.value ) }
              style={ { marginBottom: 15, borderRadius: 5 } }
            />
          </div>
        ) }
        { selectedNode.type === "locationMessage" && (
          <div>
            <h3 style={ { marginTop: 0 } }>Latitude</h3>
            <input
              type="text"
              value={ latitude }
              onChange={ ( evt ) => setLatitude( evt.target.value ) }
              style={ { marginBottom: 5, borderRadius: 5, width: "100%" } }
            />
            <h3 style={ { marginTop: 10 } }>Longitude</h3>
            <input
              type="text"
              value={ longitude }
              onChange={ ( evt ) => setLongitude( evt.target.value ) }
              style={ { marginBottom: 5, borderRadius: 5, width: "100%" } }
            />
            <h3 style={ { marginTop: 10 } }>Name</h3>
            <input
              type="text"
              value={ locationName }
              onChange={ ( evt ) => setLocationName( evt.target.value ) }
              style={ { marginBottom: 5, borderRadius: 5, width: "100%" } }
            />
            <h3 style={ { marginTop: 10 } }>Address</h3>
            <textarea
              rows="4"
              cols="25"
              value={ address }
              onChange={ ( evt ) => setAddress( evt.target.value ) }
              style={ { marginBottom: 15, borderRadius: 5 } }
            />
          </div>
        ) }
        { selectedNode.type === "documentMessage" && (
          <div>
            <h3 style={ { marginTop: 0 } }>Link</h3>
            <input
              type="text"
              value={ link }
              onChange={ ( evt ) => setLink( evt.target.value ) }
              style={ { marginBottom: 5, borderRadius: 5, width: "100%" } }
            />
            <h3 style={ { marginTop: 10 } }>Caption</h3>
            <textarea
              rows="4"
              cols="25"
              value={ caption }
              onChange={ ( evt ) => setCaption( evt.target.value ) }
              style={ { marginBottom: 15, borderRadius: 5 } }
            />
            <h3 style={ { marginTop: 10 } }>Filename</h3>
            <input
              type="text"
              value={ filename }
              onChange={ ( evt ) => setFilename( evt.target.value ) }
              style={ { marginBottom: 5, borderRadius: 5, width: "100%" } }
            />
          </div>
        ) }
        { selectedNode.type === "imageMessage" && (
          <div>
            <h3 style={ { marginTop: 0 } }>Link</h3>
            <input
              type="text"
              value={ link }
              onChange={ ( evt ) => setLink( evt.target.value ) }
              style={ { marginBottom: 5, borderRadius: 5, width: "100%" } }
            />
            <h3 style={ { marginTop: 10 } }>Caption</h3>
            <textarea
              rows="4"
              cols="25"
              value={ caption }
              onChange={ ( evt ) => setCaption( evt.target.value ) }
              style={ { marginBottom: 15, borderRadius: 5 } }
            />
          </div>
        ) }
        { selectedNode.type === "audioMessage" && (
          <div>
            <h3 style={ { marginTop: 0 } }>Link</h3>
            <input
              type="text"
              value={ link }
              onChange={ ( evt ) => setLink( evt.target.value ) }
              style={ { marginBottom: 5, borderRadius: 5, width: "100%" } }
            />
          </div>
        ) }
        { selectedNode.type === "videoMessage" && (
          <div>
            <h3 style={ { marginTop: 0 } }>Link</h3>
            <input
              type="text"
              value={ link }
              onChange={ ( evt ) => setLink( evt.target.value ) }
              style={ { marginBottom: 5, borderRadius: 5, width: "100%" } }
            />
            <h3 style={ { marginTop: 10 } }>Caption</h3>
            <textarea
              rows="4"
              cols="25"
              value={ caption }
              onChange={ ( evt ) => setCaption( evt.target.value ) }
              style={ { marginBottom: 15, borderRadius: 5 } }
            />
          </div>
        ) }
        { selectedNode.type === "addressMessage" && (
          <div>
            <h3 style={ { marginTop: 0 } }>Country</h3>
            <input
              type="text"
              value={ country }
              onChange={ ( evt ) => setCountry( evt.target.value ) }
              style={ { marginBottom: 5, borderRadius: 5, width: "100%" } }
            />
            <h3 style={ { marginTop: 10 } }>Name</h3>
            <input
              type="text"
              value={ savedAddressName }
              onChange={ ( evt ) => setSavedAddressName( evt.target.value ) }
              style={ { marginBottom: 5, borderRadius: 5, width: "100%" } }
            />
            <h3 style={ { marginTop: 10 } }>Phone Number</h3>
            <input
              type="text"
              value={ savedAddressPhoneNumber }
              onChange={ ( evt ) => setSavedAddressPhoneNumber( evt.target.value ) }
              style={ { marginBottom: 5, borderRadius: 5, width: "100%" } }
            />
            <h3 style={ { marginTop: 10 } }>Pincode</h3>
            <input
              type="text"
              value={ savedAddressPincode }
              onChange={ ( evt ) => setSavedAddressPincode( evt.target.value ) }
              style={ { marginBottom: 5, borderRadius: 5, width: "100%" } }
            />
            <h3 style={ { marginTop: 10 } }>Floor Number</h3>
            <input
              type="text"
              value={ savedAddressFloorNumber }
              onChange={ ( evt ) => setSavedAddressFloorNumber( evt.target.value ) }
              style={ { marginBottom: 5, borderRadius: 5, width: "100%" } }
            />
            <h3 style={ { marginTop: 10 } }>Building Name</h3>
            <input
              type="text"
              value={ savedAddressBuildingName }
              onChange={ ( evt ) => setSavedAddressBuildingName( evt.target.value ) }
              style={ { marginBottom: 5, borderRadius: 5, width: "100%" } }
            />
            <h3 style={ { marginTop: 10 } }>Address</h3>
            <textarea
              rows="4"
              cols="25"
              value={ savedAddressAddress }
              onChange={ ( evt ) => setSavedAddressAddress( evt.target.value ) }
              style={ { marginBottom: 15, borderRadius: 5 } }
            />
            <h3 style={ { marginTop: 10 } }>Landmark Area</h3>
            <input
              type="text"
              value={ savedAddressLandmarkArea }
              onChange={ ( evt ) => setSavedAddressLandmarkArea( evt.target.value ) }
              style={ { marginBottom: 5, borderRadius: 5, width: "100%" } }
            />
            <h3 style={ { marginTop: 10 } }>City</h3>
            <input
              type="text"
              value={ savedAddressCity }
              onChange={ ( evt ) => setSavedAddressCity( evt.target.value ) }
              style={ { marginBottom: 5, borderRadius: 5, width: "100%" } }
            />
          </div>
        ) }
      </div>
      <div style={ { width: `100%`, height: 2, background: "rgb(214, 212, 212)" } }></div>
    </>
  );
};

export default UpdateNode;
