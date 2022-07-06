import {connectToParent} from "penpal";

(async () => {
    const connection = connectToParent({
        methods: {
            hi(string) {
                document.body.appendChild(document.createElement("br"));
                document.body.appendChild(new Text(string));
            }
        }
    });
    const parent = await connection.promise;
    parent.hello("Message printed by child to parent");
})();