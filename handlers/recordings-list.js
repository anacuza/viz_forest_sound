export function deleteAudio(audioKey, setRecordings, setRecorderList) {
    setRecordings((prevState) => prevState.filter((record) => record.key !== audioKey));
    setRecorderList((prevState) => prevState.filter((record) => record.key !== audioKey));
  }