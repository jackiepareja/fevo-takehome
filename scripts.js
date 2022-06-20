(function main() {
    /** 
    * @param {string} url - fetch json url
    */
    const fetchData = async (url) => {
        const response = await fetch(url);

        if (!response.ok) {
            const message = `Error has occured: ${response.status}`;
            throw new Error(message)
        }
        const apps = await response.json();
        return apps;
    }

    // scoped variable of the returned json object
    let mergedArr = [];


    fetchData('/accounts.json').then((apps) => {
        // Track how many person objects need to be created
        let storage = {};
        for (let app of apps) {
            if (!(app.name in storage)) {
                storage[app.name] = true;
            }
        }
        // Create person properties once with constructor
        function Obj(application, emails, name) {
            this.application = application;
            this.emails = emails;
            this.name = name;
        }

        // Set how many person objects are created
        for (let [key] of Object.entries(storage)) {
            const obj1 = new Obj([], [], key);
            mergedArr.push(obj1);
        }
        
        // Store and merge properties that each person object has
        for (let element of mergedArr) {
            for (let app of apps) {
                if (element.name === app.name) {
                    element.application.push(...app.application.toString())
                    element.emails = [...app.emails]
                }
            }
        }
        // Print the merged accounts
    }).then(() => console.log('Printed Merged Accounts:', mergedArr))
}())