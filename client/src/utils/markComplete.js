module.exports = {
  markComplete: (myData, lessonsArr) => {
    if (myData) {
      for (let i = 0; i < myData.length; i++) {
        for (let j = 0; j < lessonsArr.length; j++) {
          if (myData[i].lessonName === lessonsArr[j].lessonName) {
            lessonsArr[j].isCompleted = true
            if (lessonsArr.length !== j + 1) {
              lessonsArr[j + 1].isLocked = false
            }
          }
        }
      }
      console.clear()
      console.table(lessonsArr)
      return
    }
  }
}
