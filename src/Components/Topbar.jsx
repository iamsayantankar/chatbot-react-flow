import DownloadButton from "./DownloadButton";
import DownloadJSONButton from "./DownloadJSONButton";

const Topbar = ( { saveFlow } ) =>
{
  return (
    <div className="savingChange">
      <div style={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '12px 0' } }>
        <div style={ { display: 'flex', gap: '12px' } }>
          <DownloadButton />
          <DownloadJSONButton />
        </div>
        <button
          onClick={ saveFlow }
          style={ {
            padding: '8px 16px',
            margin: '0px 32px'
            // backgroundColor: '#007bff',
            // color: '#fff',
            // border: 'none',
            // borderRadius: '6px',
            // cursor: 'pointer',
          } }
        >
          Save Changes
        </button>
      </div>


    </div>
  );
};

export default Topbar;
