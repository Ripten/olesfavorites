import '../../styles/MediaModal.css';
import ImdbInfo from './ImdbInfo';

const MediaModal = ({ handleClose, show, data }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const imdbData = show ? <ImdbInfo url={data.imdbLink} handleClose={handleClose} /> : <div />;

  return (
    <div className={showHideClassName} onClick={handleClose}>
      <section className='modal-main'>
        {imdbData}
      </section>
    </div>
  );
};

export default MediaModal;