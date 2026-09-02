export interface ReleaseCategory {
    id: string;
    title: string;
    releaseTypes: (
        | "album"
        | "single"
        | "ep"
        | "remix"
        | "other"
        | "unofficial"
    )[];
}

export const releaseCategories: ReleaseCategory[] = [
    {
        id: "albums",
        title: "Albums & EPs",
        releaseTypes: ["album", "ep"],
    },
    {
        id: "singles",
        title: "Singles",
        releaseTypes: ["single"],
    },
    {
        id: "remixes",
        title: "Official Remixes",
        releaseTypes: ["remix"],
    },
    {
        id: "other",
        title: "Other Projects",
        releaseTypes: ["other"],
    },
    {
        id: "unofficial",
        title: "Unofficial Projects",
        releaseTypes: ["unofficial"],
    },
];