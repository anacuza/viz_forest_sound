import styles from '@/styles/Recorder.module.css'
import RecorderControls from "./recorder-controls";
import RecordingsList from "./recordings-list";
import useRecorder from "./../hooks/useRecorder";


export default function Recorder({setRecorderList, recorderList}) {
    const { recorderState, ...handlers } = useRecorder();
    const { audio } = recorderState;

    return(
        <>
        <div className={styles.content_container}>
        <section className="voice-recorder">
      <h1 className="title">Voice Recorder</h1>
      <div className="recorder-container">
        <RecorderControls recorderState={recorderState} handlers={handlers} />
        <RecordingsList audio={audio} setRecorderList={setRecorderList} recorderList={recorderList}/>
      </div>
    </section>
        </div>
        </>
    )
}