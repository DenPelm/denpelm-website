export const RELEASE_CATEGORIES = [
{
        id: "albums-and-eps",
        title: "Albums & EPs",
        types: ["album", "ep"],
        order: 1,
    },

    {
        id: "single",
        title: "Singles",
        types: ["single"],
        order: 2,
    },

    {
        id: "remix",
        title: "Official Remixes",
        types: ["remix"],
        order: 3,
    },

    {
        id: "other",
        title: "Other Projects",
        types: ["other"],
        order: 4,
    },

    {
        id: "unofficial",
        title: "Unofficial Projects",
        types: ["unofficial"],
        order: 5,
    },
] as const;
