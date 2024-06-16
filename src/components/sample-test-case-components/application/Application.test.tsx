import { render, screen } from "@testing-library/react";
import Application from "./Application";


describe('Application', () => {
    test('renders correctly', () => {
        render(<Application />);

        const pageHeading= screen.getByRole('heading', {
            // name: "Job application form"
            level: 1
        });
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading= screen.getByRole('heading', {
            // name: "Section 1"
            level: 2
        });
        expect(sectionHeading).toBeInTheDocument();

        const paraEle= screen.getByText("All fields are mandatory");
        expect(paraEle).toBeInTheDocument();

        const closeElement= screen.getByTitle("close");
        expect(closeElement).toBeInTheDocument();


        const imageEle= screen.getByAltText ("a person with a laptop");
        expect(imageEle).toBeInTheDocument();

        const customEle= screen.getByTestId("custom-element");
        expect(customEle).toBeInTheDocument();

        const nameEle= screen.getByRole("textbox",{
            name: "Name"
        });
        expect(nameEle).toBeInTheDocument();

        const nameEle2= screen.getByLabelText('Name');
        expect(nameEle2).toBeInTheDocument();

        const nameEle3= screen.getByPlaceholderText("Fullname");
        expect(nameEle3).toBeInTheDocument();

        const nameEle4= screen.getByDisplayValue("Vishwas");
        expect(nameEle4).toBeInTheDocument();
        

        const biole= screen.getByRole("textbox",{
            name: "Bio"
        });
        expect(biole).toBeInTheDocument();

        const jobLocationEle= screen.getByRole('combobox');
        expect(jobLocationEle).toBeInTheDocument();

        const termsEle= screen.getByRole('checkbox');
        expect(termsEle).toBeInTheDocument();

        const termsEle2= screen.getByLabelText("I agree to the terms and conditions");
        expect(termsEle2).toBeInTheDocument();

        const submitButtonEle= screen.getByRole('button');
        expect(submitButtonEle).toBeInTheDocument();

    })
})