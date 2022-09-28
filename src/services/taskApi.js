export const taskApi = (() => {
    const URL = 'http://192.168.1.60:1601';

    const myHeader = new Headers();
    myHeader.set('Content-Type', 'application/json');
    myHeader.set('Access-Control-Allow-Origin', '*');

    return {
        getTaskByUser: async idUser => {
            const response = await fetch(`${URL}/api/v1/task/6331cff43857e916e74cd3ca`, {
                headers: {
                    "Content-Type": "application/json", 
                }, 
                method: 'GET',
            });
            if (!response.ok) throw new Error('The response failed');
            return response.json();
        },
    };
})();