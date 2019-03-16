export async function createStudent(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('saved: ', data);
            resolve(data);
        }, 1000);
    });
};
