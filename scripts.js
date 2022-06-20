(function main() {
    const apps = [
        {
            "application": "x", // 1
            "emails": ["a@gmail.com", "b@gmail.com"],
            "name": "A"
        },
        {
            "application": "y",
            "emails": ["c@gmail.com", "d@gmail.com"],
            "name": "C"
        },
        {
            "application": "x",
            "emails": ["a@yahoo.com"],
            "name": "A"
        },
        {
            "application": "z",
            "emails": ["a@gmail.com", "a@yahoo.com"],
            "name": "A"
        }
    ]

    let storage = {};
    // fetch the the accounts.json file
    // loop through the array
    for (let app of apps) {
        if (!(app.name in storage)) {
            storage[app.name] = true;
        }
    }

    let mergedArr = [];

    function Obj(application, emails, name) {
        this.application = application;
        this.emails = emails;
        this.name = name;
    }

    for (let [key] of Object.entries(storage)) {
        const obj1 = new Obj([], [], key);

        mergedArr.push(obj1)
    }

    // for (let app of apps) {
    //     console.log('app', app.application)
    // }

    // loop over the mergedArr
    for (let element of mergedArr) {
        //console.log('element', element)
        for (let app of apps) {
            if (element.name === app.name) {
                element.application = [...app.application, app.application];
                element.emails = [...app.emails]
            }
        }
        // if element.name matches app.name then store app.name values

    }

    console.log(mergedArr)


}())