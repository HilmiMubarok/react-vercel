import { render } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import Surah from "./Quran/Surah";

test("renders learn react link", () => {
    render(
        <BrowserRouter>
            <Surah />
        </BrowserRouter>
    );
});
