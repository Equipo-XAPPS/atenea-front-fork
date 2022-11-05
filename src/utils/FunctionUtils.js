//El property reference hace mención al valor a buscar es decir si quiero buscar por level_name, displayName, son las propiedades de los objetos
const searchReferenceId = (array, searchReference, propertyReference) => {
    const index = array.findIndex((nameReference, index) => {
        return nameReference[propertyReference] === searchReference
    })
    return index
}
const searchGrades = (array, filter) => {
    // console.log(array)
    filter = filter.toLowerCase()
    const filterLevelNames = array.filter((grade) => {
        console.log(searchByGradeName(grade.grades, filter))
        // const levelNames = grade.level_name.toLowerCase().includes(filter)
        // return levelNames

        //remplazamos los valores de cada nivel por defecto por los que filtramos dos veces
        grade.grades = searchByGradeName(grade.grades, filter)
        return grade
    })
    return filterLevelNames
}
// array.filter((grade) => {
//     console.log(array)
//     // const teacherName = array.grades.teacherRef.includes(filter)
//     // const gradeName = array.grades.grade_name.includes(filter)
//     const levelGrade = array.level_name.includes(filter)
//     // console.log(teacherName)
//     // console.log(gradeName)
//     console.log(levelGrade)
// })
const searchByGradeName = (array, filter) => {
    // console.log(array)
    const filterGradeNames = array.filter((grade) => {
        const gradeNames = grade.grade_name.toLowerCase().includes(filter)
        return gradeNames
    })
    return filterGradeNames
}
export { searchReferenceId, searchGrades }