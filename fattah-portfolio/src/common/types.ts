export interface ButtonProps {
    label: string;
    sectionId: string;
}

export interface MyDetails {
    name: string;
    position: string;
}

interface SubItems {
    title: string;
    list: string[];
}

export interface Expertise {
	src: string;
	alt: string;
	title: string;
	desc: string;
    subItems: SubItems[];
}