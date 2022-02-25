module.exports = {
  markComplete: (myData, lessonsArr) => {
    // takes in the lessonArray which includes every single lesson & the completedLessons array in the users database 
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
      return
    }
  }
}
