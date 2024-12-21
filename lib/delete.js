import Teacher from "./modals/teacher";
const deleteAllTeachers = async () => {
    try {
      await Teacher.deleteMany({});
      console.log('All teacher data has been deleted');
    } catch (error) {
      console.error('Error deleting teacher data:', error);
    }
  };
export default deleteAllTeachers;