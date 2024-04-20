export interface NavBarButtons {
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
    titleColor: string;
	desc: string;
    subItems: SubItems[];
}

export interface Projects {
    src: string;
    alt: string;
    title: string;
    desc: string;
    techStack: string[];
    url: string;
}

export interface Experience {
    position: string;
    company: string;
    location: string;
    timeRange: string;
    responsibility: string[];
    techStack: string[];
    url: string;
    src?: string;
    alt?: string;
}

export interface Contact {
    name: string;
    url: string;
    src: string;
    alt: string;
}