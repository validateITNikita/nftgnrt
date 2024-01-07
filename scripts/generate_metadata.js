import fs from "fs";
import { NAME, DESCRIPTION, TIMESTAMP, IPFS_LINKS, names } from "../metadata_const.js";

let maxSupply = 333;
let currentIndex = 1;

let basePath = "./METADATA/";
let fileExtension = ".json";

// ! CHANGE WEBSITE LINK

const GenerateOneGentleman = ({ name: gentleman_name }) => {
    let attribute = {
        trait_type: "Gentleman Name",
        value: gentleman_name,
    };

    let image = IPFS_LINKS[gentleman_name];

    let nft = {
        name: NAME,
        description: DESCRIPTION,
        id: currentIndex,
        date: TIMESTAMP,
        image: image,
        external_url: "http://mentevisionaria.site",
        attributes: [attribute],
    };

    fs.writeFileSync(
        `${basePath}${currentIndex}${fileExtension}`,
        JSON.stringify(nft, null, 4)
    );

    currentIndex++;
};

const GenereateAll = () => {
    let image_id = 0;

    for (let index = 1; index <= maxSupply; index++) {
        if (image_id == names.length) {
            image_id = 0;
        }

        GenerateOneGentleman({
            name: names[image_id],
        });

        image_id++;
    }
};

GenereateAll();
