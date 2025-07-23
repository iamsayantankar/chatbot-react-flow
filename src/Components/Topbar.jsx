import DownloadButton from "./DownloadButton";
import DownloadJSONButton from "./DownloadJSONButton";

const Topbar = ( { saveFlow } ) =>
{
  return (
    <div className="savingChange">
      <div style={ { display: 'flex', flexDirection: 'row', position: 'absolute', left: 10, top: 10 } }>
        <DownloadButton />
        <DownloadJSONButton />
      </div>
      {/* Button that triggers the saveFlow function when clicked */ }
      <button onClick={ saveFlow }>Save Changes</button>
    </div>
  );
};

export default Topbar;
