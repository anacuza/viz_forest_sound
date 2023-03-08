import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faTimes, faSave } from "@fortawesome/free-solid-svg-icons";
import { formatMinutes, formatSeconds } from "../../utils/format-time";
import styles from '@/styles/RecorderControls.module.css';

export default function RecorderControls({ recorderState, handlers }) {
  const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
  const { startRecording, saveRecording, cancelRecording } = handlers;

  return (
    <div className={styles.controlsContainer}>
      <div className={styles.recorderDisplay}>
        <div className={styles.recordingTime}>
          {initRecording && <div className={styles.recordingIndicator}></div>}
          <span>{formatMinutes(recordingMinutes)}</span>
          <span>:</span>
          <span>{formatSeconds(recordingSeconds)}</span>
        </div>
        {initRecording && (
          <div className={styles.cancelButtonContainer}>
            <button className={styles.cancelButton} title="Cancel recording" onClick={cancelRecording}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        )}
      </div>
      <div className={styles.startButtonContainer}>
        {initRecording ? (
          <button
            className={styles.startButton}
            title="Save recording"
            disabled={recordingSeconds === 0}
            onClick={saveRecording}
          >
            <FontAwesomeIcon icon={faSave} size="2x" />
          </button>
        ) : (
          <button className={styles.startButton} title="Start recording" onClick={startRecording}>
            <FontAwesomeIcon icon={faMicrophone} size="2x" />
          </button>
        )}
      </div>
    </div>
  );
}