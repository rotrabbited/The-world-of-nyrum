/* ------------------------------------------------------------------- */
/* Site Options
/* -------------------------------------------------------------------  /

  These generally don't need to be touched other than the SheetID

  If you would like to update the univerial options in initial,
  like having all pages have 24 items, you can do so here

/* ------------------------------------------------------------------- */
const charadexOptions = {

    /* Default Options
    /* --------------------------------------------------------------- */
    initial: {

        // Sheetpage will always be needed
        sheetVersion: '1.5.0',
        sheetID: "1GwgfLizD3HQCieGia6di-TfU4E3EipT9Jb0BDZQwNak",
        sheetPage: 'masterlist',

        // Dex Type
        // Full dex means a dex with a gallery and a single
        // card - a full dex alwys needs a page key
        // A page key will be the col used to pick out the
        // design
        fullDex: true,
        pageKey: 'design',

        // Pagination
        // This is just the pagination for the gallery
        pagination: true,
        itemAmount: 12,
        itemOrder: "asc",

        // Faux Folders
        // Folder col should be the column you'd like the 
        // folder to sort by
        fauxFolders: false,
        fauxFoldersCol: {},

        // Filters 
        filters: false,
        filterOptions: {},

        // Search
        search: false,
        searchParams: [],

        // List.js
        listContainer: 'charadex-gallery',
        listItemGallery: 'charadex-entries',
        listItemSingle: 'charadex-card',
        listClass: '',

    },



    /* Page Names 
    /* --------------------------------------------------------------- */
    pages: {

        masterlist: "masterlist",
        masterlistLog: "masterlist log",
        inventory: "inventory",
        inventoryLog: "inventory log",
        items: "items",
        traits: "traits",
        prompts: "prompts",
        faq: "faq",
        staff: "mods"

    },



    /* Homepage
    /* --------------------------------------------------------------- */
    get index() {
        return {

            promptSheetPage: this.pages.prompts,
            numOfPrompts: 3,

            staffSheetPage: this.pages.staff,
            numOfStaff: 8,

            masterlistSheetPage: this.pages.masterlist,
            numOfDesigns: 4,

        }
    },


    /* Masterlist
    /* --------------------------------------------------------------- */
    get masterlist() {
        return {

            sheetPage: this.pages.masterlist,
            pageKey: 'design',

            pagination: true,
            itemAmount: 12,
            itemOrder: "asc",

            fauxFolders: false,
            fauxFoldersCol: {
                'Species' : ['All', 'Dog', 'Cat', 'Bunny']
            },

            filters: true,
            filterOptions: {
                'Design Type': ['All', 'Official Design', 'Guest Design', 'MYO Slot'],
                'Species' : ['All', 'Dog', 'Cat', 'Bunny']
            },

            search: true,
            searchParams: ['All', 'ID', 'Owner', 'Designer', 'Artist'],

        }
    },


    /* Item Catalogue
    /* --------------------------------------------------------------- */
    get items() {
        return {

            sheetPage: this.pages.items,
            pageKey: 'item',

            pagination: true,
            itemAmount: 24,
            itemOrder: "asc",

            filters: true,
            filterOptions: {
                'Rarity': ['All', 'Common', 'Uncommon', 'Rare', 'Very Rare', 'Mythic'],
            },
            
            search: true,
            searchParams: ['Item'],

        }
    },


    /* Inventory
    /* --------------------------------------------------------------- */
    get inventory() {
        return {

            sheetPage: this.pages.inventory,
            pageKey: 'username',

            itemSheetPage: this.pages.items,

            pagination: true,
            itemAmount: 24,
            sortTypes: ['Currency', 'MYO Slot', 'Pet', 'Trait', 'Misc'],

            search: true,
            searchFilterParams: ['Username'],

        }
    },


    /* Prompts
    /* --------------------------------------------------------------- */
    get prompts() {
        return {

            sheetPage: this.pages,
            pageKey: 'id',

            pagination: true,
            itemAmount: 24,
            itemOrder: "desc",

            search: true,
            searchFilterParams: ['Title'],

        }
    },


    /* Traits
    /* --------------------------------------------------------------- */
    get traits() {
        return {

            sheetPage: this.pages.traits,
            pageKey: 'trait',

            itemAmount: 24,
            itemOrder: "asc",
            
            filters: true,
            filterOptions: {
                'Rarity': ['All', 'Common', 'Uncommon', 'Rare', 'Very Rare', 'Mythic'],
            },
            
            search: true,
            searchFilterParams: ['Trait'],

        }
    },


    /* Staff
    /* --------------------------------------------------------------- */
    get staff() {
        return {

            sheetPage: this.pages.staff,
            fullDex: false,

        }
    },


    /* FAQ
    /* --------------------------------------------------------------- */
    get faq() {
        return {

            sheetPage: this.pages,

            itemAmount: 24,
            itemOrder: "asc",

            searchFilterParams: ['Tags'],

        }
    },

    
    /* Sync Options
    /* Sync up the options and allow you to set your own if needed
    /* --------------------------------------------------------------- */
    syncOptions(o) {

        if (typeof o == 'string') return { ...this.initial, ...this[o] }
        if (typeof o == 'object') return { ...this.initial, ...o }

    },

}