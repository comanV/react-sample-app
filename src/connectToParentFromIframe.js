import {connectToParent} from "penpal";

(async () => {
    const connection = connectToParent({
        methods: {
            hi(string) {
                document.body.appendChild(document.createElement("br"));
                document.body.appendChild(new Text(string));
            },
            getValueFromChild() {
                return "I am returned from a child function"
            }
        }
    });
    const parent = await connection.promise;
    parent.hello("Message printed by child to parent :)");

    // append text retrieved from a parent method
    parent.getValueFromParent().then((valueReturnedFromParent) => {
        document.body.appendChild(document.createElement("br"));
        document.body.appendChild(new Text(valueReturnedFromParent));
    })

})();
