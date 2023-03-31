import styles from '@/styles/Final.module.css'


export default function Final({labelList, recorderList, ratingList, mappingList}) {

    console.log(labelList)
    return(
        <>
            <div className={styles.container}>

                <div className={styles.subcontainer}>
                    <h1>Picked labels</h1>
                    <ul>
                    {labelList.map((label, i) => (
                        <li key={i}>{label}</li>
                    ))
                    }
                    </ul>
                </div>

                <div className={styles.subcontainer}>
                    <h1>Recordings</h1>
                    {console.log(recorderList)}
                    {/* {recorderList.map((recording, i) => 
                        {
                            // {   let blobData = new Blob(recording, { type: 'audio/wav' });
                            //     const url = URL.createObjectURL(blob)}
                            {console.log(recording.audio)}
                            <a href={recording.audio} download>hello</a>
                        })} */}
                    {recorderList.map((record) => (
                        <div className={styles.record} key={record.key}>
                            <audio controls src={record.audio} />
                        </div>
                    ))}
                </div>

                <div className={styles.subcontainer}>
                <h1>Rating</h1>
                </div>

                <div className={styles.subcontainer}>
                <h1>Map Selections</h1>
                    <ul>
                    {mappingList.map((mapping, i) => (
                        <li key={i}>{mapping}</li>
                    ))}
                    </ul>
                </div>

                
            </div>
        </>
    )
}