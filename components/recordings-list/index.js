import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import useRecordingsList from "../../hooks/use-recordings-list";
import styles from '@/styles/RecordingsList.module.css';

export default function RecordingsList({ audio }) {
  const { recordings, deleteAudio } = useRecordingsList(audio);

  return (
    <div className={styles.recordingsContainer}>
      {recordings.length > 0 ? (
        <>
          <h1>Your recordings</h1>
          <div className={styles.recordingsList}>
            {recordings.map((record) => (
              <div className={styles.record} key={record.key}>
                <audio controls src={record.audio} />
                <div className={styles.deleteButtonContainer}>
                  <button
                    className="deleteButton"
                    title="Delete this audio"
                    onClick={() => deleteAudio(record.key)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className={styles.noRecords}>
          <FontAwesomeIcon icon={faExclamationCircle} size="2x" color="#f2ea02" />
          <span>You don't have records</span>
        </div>
      )}
    </div>
  );
}