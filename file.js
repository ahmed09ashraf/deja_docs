window.DOCS_DATA = {
  "appTitle": "Documentation",
  "appSubtitle": "Product knowledge base",
  "tabs": [
    {
      "id": "administration",
      "title": "Administration",
      "icon": "user",
      "modules": []
    },
    {
      "id": "master-data",
      "title": "Master Data",
      "icon": "database",
      "modules": [
        {
          "id": "charge-codes",
          "title": "Charge Codes",
          "icon": "file-text",
          "summary": "Company-specific catalogue of billable charge names used by invoices, debit documents, and quotation tariffs.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "The master catalogue of every billable line item the company can place on an Invoice or Debit (Cost) document, such as Ocean Freight, THC, Storage, or Administration Fee. Documents reference a row from this list rather than accepting a free-typed charge name. The catalogue is scoped by company_id, so each company maintains its own list."
            },
            {
              "heading": "Access",
              "type": "table",
              "columns": ["Item", "Value"],
              "rows": [
                ["Menu path", "Master Data → Charge Codes"],
                ["Route", "chargesDesc.index"],
                ["Permission", "Charge Codes (List / Create / Edit / Delete)"],
                ["Feature flag", "charges"]
              ]
            },
            {
              "heading": "Fields stored",
              "type": "table",
              "columns": ["Field", "Meaning"],
              "rows": [
                ["Name", "Required display name; unique within the company"],
                ["Tax Portal Code", "Required free-text tax/e-invoicing code, stored in the code column"],
                ["Type", "Invoice (customer charge) or Debit (supplier cost)"],
                ["Category", "Invoice: THC / Admin / Cleaning; Debit: fixed Owner Account option"],
                ["Related Account (QB)", "QuickBooks chart-of-accounts link, shown only when integration is enabled"],
                ["QB Item Name", "Optional name override used in QuickBooks"],
                ["Static Code", "System-only identity used by automatic calculations; not editable on the form"]
              ]
            },
            {
              "heading": "Static system charges",
              "type": "callout",
              "style": "warning",
              "content": "Seeded charges such as ADFE, OFRI/OFRE, IS/ES, ID/ED, PI/PE, and WARR are looked up by static_code by invoicing and storage/detention calculations. They have is_deletable = false and must remain available even if their display labels differ."
            },
            {
              "heading": "Listing & search",
              "type": "text",
              "content": "Paginated 30 per page and ordered by ID. Filters can be combined: Name, Tax Portal Code, Type (Debit / Invoice), and Category (THC / Admin / Cleaning). Each row shows a live count of invoices using that charge name."
            },
            {
              "heading": "Create & edit rules",
              "type": "rules",
              "items": [
                "Name and Tax Portal Code are required; Type defaults to Invoice and Category is optional.",
                "Name must be an exact, case-sensitive unique value within the current company.",
                "If a charge is already used by an Invoice or Quotation Tariff, its Name and Type cannot be changed.",
                "Tax Portal Code, Category, and QuickBooks settings remain editable even when the charge is in use."
              ]
            },
            {
              "heading": "Delete rules",
              "type": "callout",
              "style": "danger",
              "content": "Delete is shown only when the charge is used by zero invoices and is_deletable is true. Seeded static charges can never be deleted. Eligible deletes require confirmation."
            },
            {
              "heading": "Sync to companies",
              "type": "text",
              "content": "A row action and bulk checkbox mode can copy charge setup to other companies in the same group, avoiding manual recreation in each sister company."
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Charge Codes defines the vocabulary used by invoices, costs, and quotation tariffs. Static-code rows are especially important because automated Administration Fee, Ocean Freight, Storage, Demurrage/Detention, Power, and War Risk logic depends on them."
            }
          ]
        },
        {
          "id": "port-and-terminal",
          "title": "Port & Terminal",
          "icon": "anchor",
          "summary": "Global port and terminal/depot registry, including per-company terminal display-code mappings.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "Ports and Terminals are global master data shared by every company. A Port is a country-linked top-level location; a Terminal or Depot is a facility within a port that is referenced by Movements, Bookings, and depot-specific Damage List rates."
            },
            {
              "heading": "Access",
              "type": "table",
              "columns": ["Item", "Value"],
              "rows": [
                ["Menu path", "Master Data → Port & Terminal"],
                ["Sub-screens", "Port & Terminal List / Terminal Mappings"],
                ["Permissions", "Ports-List; Terminals-List additionally for Terminal Mappings"],
                ["Feature flag", "ports_terminals"]
              ]
            },
            {
              "heading": "Fields stored",
              "type": "table",
              "columns": ["Record", "Fields"],
              "rows": [
                ["Port", "Name, globally unique Code, and Country"],
                ["Terminal / Depot", "Code, Type (Terminal id 3 or Depot id 4), and immutable Static Code"],
                ["Terminal Mapping", "old_code, per-company editable code, terminal_id, port_id, type_id, company_id"]
              ]
            },
            {
              "heading": "Listing & search",
              "type": "text",
              "content": "The global Port list is paginated 30 per page and ordered by ID. Filters: Name, Code, and Country. The eye action opens all Terminal/Depot rows under a port."
            },
            {
              "heading": "Create & edit rules",
              "type": "rules",
              "items": [
                "The Port and all of its Terminal rows are maintained together in one repeatable-row form.",
                "Port Code and Port Name must each be globally unique; edit checks exclude the current port.",
                "A new terminal's static_code is copied from its original Code and never changes.",
                "Later edits match a terminal by port_id + static_code, allowing its displayed Code to be renamed safely.",
                "An existing terminal row cannot be removed from the edit form after it has Movement records."
              ]
            },
            {
              "heading": "Static Code identity",
              "type": "callout",
              "style": "info",
              "content": "static_code is the terminal's permanent identity anchor. Renaming the visible Code does not break Movement history, Damage entries, mappings, or other records because those continue to reference the same terminal_id."
            },
            {
              "heading": "Delete rules",
              "type": "callout",
              "style": "danger",
              "content": "A Port cannot be deleted while it has related Voyage Port records. If clear, deleting the Port deletes all of its Terminal rows; this full-Port path does not perform the per-terminal Movement check used by the Edit form."
            },
            {
              "heading": "Terminal Mappings",
              "type": "steps",
              "items": [
                "Creating a Terminal automatically creates one mapping row per company.",
                "old_code freezes the Terminal Code at creation; code starts with the same value and is editable per company.",
                "Choose a Port to edit the current company's mapped codes; there is no manual Create or Delete action.",
                "Deleting the underlying Terminal automatically removes its mappings."
              ]
            },
            {
              "heading": "Current mapping limitation",
              "type": "callout",
              "style": "warning",
              "content": "The per-company mapped code is labeling infrastructure, but at the documented point it is not yet consumed by outbound export or EDI features."
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Voyages, Bookings, Movement Control, and depot-specific Damage rates all depend on this shared location hierarchy. Because it is global, incorrect data can affect every company."
            }
          ]
        },
        {
          "id": "suppliers-list",
          "title": "Suppliers List",
          "icon": "users",
          "summary": "Supplier profiles and their dated, criteria-based charge-item price lists used to build Cost invoices.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "The company master registry of external suppliers—depots, truckers, terminal operators, sellers, lessors, haulage, and service providers. Each supplier also owns a repeatable Charge Items price list that supplies the selectable services and default prices for Cost (Debit) invoices."
            },
            {
              "heading": "Access",
              "type": "table",
              "columns": ["Item", "Value"],
              "rows": [
                ["Menu path", "Master Data → Suppliers List"],
                ["Route", "suppliers.index"],
                ["Permission", "Suppliers (List / Create / Edit / Show / Delete)"],
                ["Feature flag", "suppliers_list"]
              ]
            },
            {
              "heading": "Supplier profile",
              "type": "table",
              "columns": ["Field", "Meaning"],
              "rows": [
                ["Name", "Required and unique"],
                ["Country / Address / Phone / Email", "Required supplier and contact information"],
                ["City / Tax Card", "Optional profile information"],
                ["Primary / Secondary Currency", "Currencies normally used by the supplier"],
                ["Contact People", "Repeatable named-contact list"],
                ["Supplier Types", "Any combination of Depot, Services Provider, Seller, Trucker, Lessor, Haulage, Terminal"]
              ]
            },
            {
              "heading": "Charge Item fields",
              "type": "table",
              "columns": ["Field group", "Meaning"],
              "rows": [
                ["Applicability", "Optional Terminal, Full/Empty status, Shipment Type, Equipment Type, and Cargo Type"],
                ["Classification", "Category, Sub Category, Code, Payer, and optional Equivalent Item"],
                ["Description", "Required service description"],
                ["Price", "Currency and Amount"],
                ["Invoice Type", "Storage / General / THC / Ocean Freight"],
                ["Validity", "Valid From / Valid To date range"]
              ]
            },
            {
              "heading": "Create & edit rules",
              "type": "rules",
              "items": [
                "Required supplier fields: unique Name, Country, Address, Phone, and Email.",
                "Charge Items are optional repeatable rows and each can have its own validity window.",
                "A Charge Item already referenced by a Cost Description cannot be removed; attempting it rejects the entire supplier save.",
                "An in-use Charge Item may remain in place while its other fields are edited."
              ]
            },
            {
              "heading": "Supplier view",
              "type": "text",
              "content": "The read-only Show page opens in a new tab and provides a searchable, paginated price list. It can filter by Description, Equivalent Item, status/type fields, currency, category, amount, Invoice Type, Terminal, and validity dates."
            },
            {
              "heading": "How Cost invoices find rates",
              "type": "steps",
              "items": [
                "The selected Supplier Type limits the supplier dropdown to suppliers carrying that classification.",
                "Supplier + Invoice Type + Operation Date selects only that supplier's Charge Items valid on the operation date.",
                "Shipment Type, Container Status, and Equipment Type must match when specified; blank criteria generally match anything, while Transhipment matches only Transhipment.",
                "Terminal rates determine the available Port list and can auto-select the port when all rates belong to one port.",
                "Each Cost line references one validated supplier_charge_item_id and links direct containers, a BL Draft, or a Booking.",
                "The stored Amount is a starting default; unit rate and quantity can be overridden per container on the invoice."
              ]
            },
            {
              "heading": "Cost totals",
              "type": "text",
              "content": "Line total is quantity × unit rate, or the sum of per-container rate × quantity overrides. VAT Applied adds 14%. Invoice totals use the invoice's exchange rate and conversion direction without modifying the supplier Charge Item's stored reference amount."
            },
            {
              "heading": "Delete rules",
              "type": "callout",
              "style": "danger",
              "content": "Deletion is blocked by active Cost invoices or any Cost Description referencing the supplier's Charge Items. Soft-deleted Cost records may be purged when no active costs remain; unused Charge Items are removed before the Supplier itself."
            },
            {
              "heading": "Export",
              "type": "text",
              "content": "Excel export uses the active Supplier Name, Country, and Supplier Type filters. It outputs one row per Charge Item, repeating the supplier profile on each row to form a flat complete price list."
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Cost invoicing depends on this registry. Missing type classifications, mismatched criteria, or an expired Valid To date are common reasons an expected supplier rate does not appear."
            }
          ]
        },
        {
          "id": "banks",
          "title": "Banks",
          "icon": "briefcase",
          "summary": "Company-owned bank-account master list used when recording receipt deposits.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "The master list of the company's own bank accounts, used to record where a Receipt or Receipt Payment was deposited. It is not a registry of customer or supplier banks."
            },
            {
              "heading": "Access",
              "type": "table",
              "columns": ["Item", "Value"],
              "rows": [
                ["Menu path", "Master Data → Banks"],
                ["Route", "banks.index"],
                ["Permission", "Suppliers permission group (Create / Edit / Show / Delete)"],
                ["Feature flag", "banks"]
              ]
            },
            {
              "heading": "Fields stored",
              "type": "table",
              "columns": ["Field", "Rule"],
              "rows": [
                ["Name", "Required bank name"],
                ["Branch", "Optional"],
                ["Currency", "Required fixed option: EGP / USD / EUR"],
                ["Account Number", "Required numeric value"],
                ["IBAN / SWIFT Code", "Optional"],
                ["Status", "Active / Inactive; new accounts start Active"]
              ]
            },
            {
              "heading": "Listing & search",
              "type": "text",
              "content": "Company-scoped list, paginated 30 per page and ordered by Name then Currency. Filter by Bank Name or Currency. Add, Edit, and View all use modal dialogs on the list page."
            },
            {
              "heading": "Create & edit rules",
              "type": "rules",
              "items": [
                "Name, Currency, and Account Number are required.",
                "Branch, IBAN, and SWIFT Code are optional.",
                "There is no duplicate check for either bank name or account number.",
                "Status is not part of Add/Edit; it is controlled from the list."
              ]
            },
            {
              "heading": "Active / inactive status",
              "type": "callout",
              "style": "info",
              "content": "The row badge toggles status after confirmation through an AJAX request. Inactive accounts remain attached to historical records but should not be offered for new Receipts."
            },
            {
              "heading": "Delete rules",
              "type": "callout",
              "style": "danger",
              "content": "An account referenced by any Receipt or ReceiptPayment cannot be deleted. Its Delete action is hidden because can_delete is precomputed for the list. Use Inactive to retire an account while preserving history."
            },
            {
              "heading": "Sync to companies",
              "type": "text",
              "content": "Individual and bulk Sync to Companies actions copy bank-account setup to other companies in the same group."
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Banks is the authoritative list for identifying which company account received money. Once used, an account is retained permanently for financial history."
            }
          ]
        },
        {
          "id": "exchange-rates",
          "title": "Exchange Rates",
          "icon": "activity",
          "summary": "Global, non-overlapping currency-rate periods used for foreign-currency conversion to EGP.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "Defines the conversion rate for each foreign Currency during an inclusive Date From / Date To period. Rates are global—there is no company_id—so every company shares the same periods. EGP is excluded because no EGP-to-EGP rate is needed."
            },
            {
              "heading": "Access",
              "type": "table",
              "columns": ["Item", "Value"],
              "rows": [
                ["Menu path", "Master Data → Exchange Rates"],
                ["Route", "exchange-rates.index"],
                ["Permission", "ExchangeRate (List / Create / Edit / Delete)"],
                ["Feature flag", "exchange_rates"]
              ]
            },
            {
              "heading": "Fields stored",
              "type": "table",
              "columns": ["Field", "Meaning"],
              "rows": [
                ["Currency", "Foreign currency; EGP excluded"],
                ["Rate", "Numeric conversion rate to the base currency"],
                ["Date From / Date To", "Inclusive validity window, non-overlapping for the same currency"]
              ]
            },
            {
              "heading": "Listing & search",
              "type": "text",
              "content": "Paginated 10 per page and ordered by newest Date From. Filter by Currency and date range; date filtering returns any period that overlaps the search range. A period covering today receives an Active badge."
            },
            {
              "heading": "Add rates",
              "type": "steps",
              "items": [
                "Add one or more Currency + Rate rows sharing a single Date From / Date To range.",
                "The same currency cannot appear twice in the submitted batch.",
                "Each row is checked for overlap with an existing period for that currency.",
                "If any currency conflicts, the entire batch is rejected and the conflicting currencies are named.",
                "When all checks pass, every row is inserted together in a database transaction."
              ]
            },
            {
              "heading": "Edit rates",
              "type": "text",
              "content": "Edit changes one row's Currency, Rate, and dates. The same overlap validation applies while excluding the current row itself."
            },
            {
              "heading": "Delete behavior",
              "type": "callout",
              "style": "warning",
              "content": "Deletion only requires confirmation and has no in-use guard. Previously generated output keeps its calculated value, but later recalculation for that historical date may fail or differ because rates are looked up live rather than stored by reference."
            },
            {
              "heading": "How rates are consumed",
              "type": "text",
              "content": "Conversion code looks up the period covering the relevant date (or now), scoped to the currency and ordered by Date From descending. This supports QuickBooks conversion sync and shared PDF/report helpers."
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Foreign-currency conversion depends on continuous, non-overlapping coverage. A gap between periods means no rate can be found for calculations on those dates."
            }
          ]
        }
      ]
    },
    {
      "id": "crm",
      "title": "CRM",
      "icon": "users",
      "modules": []
    },
    {
      "id": "tariff",
      "title": "Tariff",
      "icon": "file-text",
      "modules": []
    },
    {
      "id": "vessel-voyage",
      "title": "Vessel & Voyage",
      "icon": "anchor",
      "modules": []
    },
    {
      "id": "container-control",
      "title": "Container Control",
      "icon": "box",
      "modules": [
        {
          "id": "equipment-types",
          "title": "Equipment Types",
          "icon": "box",
          "summary": "Master catalogue of container types/sizes (e.g. 20 DV, 40 HC) used across the whole system.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "Defines the catalogue of container 'types/sizes' a company works with (e.g. 20 DV, 40 HC, 20 RF, 40 FR, 20 TK). This is master/reference data — it does not represent a physical box, it represents a category that many physical boxes belong to. Every physical container (Container List) must link to one of these types."
            },
            {
              "heading": "Access",
              "type": "table",
              "columns": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Menu path",
                  "Container Control → Equipment Types"
                ],
                [
                  "Permission",
                  "Equipment Type (List / Create / Edit / Delete)"
                ],
                [
                  "Feature flag",
                  "equipment_types"
                ]
              ]
            },
            {
              "heading": "Feeds these modules",
              "type": "rules",
              "items": [
                "Container List — each container picks its type here",
                "Movement Control — type is shown/validated on every movement & booking link",
                "Bookings — a booking requests containers of a specific type/qty",
                "Trucker Guarantee — deposit amounts are per equipment type"
              ]
            },
            {
              "heading": "Fields stored",
              "type": "table",
              "columns": [
                "Field",
                "Meaning"
              ],
              "rows": [
                [
                  "Size / Type",
                  "Free text, e.g. '20 DV'. Leading number is auto-extracted and stored separately as Size."
                ],
                [
                  "Category",
                  "Exactly one of: Dry / Special Equipment / Reefer"
                ],
                [
                  "Iso No",
                  "Optional ISO container classification code"
                ],
                [
                  "Width / Height / Length",
                  "Optional physical dimensions, informational only"
                ],
                [
                  "Price",
                  "Reference monetary value, used by Trucker Guarantee deposit calc"
                ],
                [
                  "Currency",
                  "Currency the Price is expressed in"
                ],
                [
                  "Company",
                  "Owning company (multi-tenant — each company sees only its own list)"
                ]
              ]
            },
            {
              "heading": "Listing & search",
              "type": "text",
              "content": "Paginated (30/page), ordered by creation order (ID). Filters: Size/Type (free text) and Category (dropdown). Both filters combine; clearing resets the list."
            },
            {
              "heading": "Create rules",
              "type": "rules",
              "items": [
                "Required: Size/Type (name) + Category. Everything else optional.",
                "Duplicate check on (Name + Category) pair — same name with a DIFFERENT category is allowed.",
                "Size is auto-extracted from leading digits: '20 DV' → 20, '40HC' → 40. No leading number → Size stays empty.",
                "New record is auto-stamped with the creating user's company_id."
              ]
            },
            {
              "heading": "Edit rules",
              "type": "rules",
              "items": [
                "Same duplicate check as create (excludes the record being edited itself).",
                "Size is re-extracted from the Name every time it's edited."
              ]
            },
            {
              "heading": "Price Lock rule",
              "type": "callout",
              "style": "warning",
              "content": "If ANY physical container of this Equipment Type is currently held against an active Trucker Guarantee, the Price field becomes READ-ONLY on edit and any submitted value is ignored. It unlocks automatically once no container of that type is under an active guarantee."
            },
            {
              "heading": "Delete rules",
              "type": "callout",
              "style": "danger",
              "content": "Cannot delete an Equipment Type that is still referenced by any container in the Container List. Only types with zero linked containers can be removed. Confirmation prompt is required before deleting."
            },
            {
              "heading": "Permissions",
              "type": "table",
              "columns": [
                "Action",
                "Permission code"
              ],
              "rows": [
                [
                  "View list",
                  "Equipment Type-List"
                ],
                [
                  "Create",
                  "Equipment Type-Create"
                ],
                [
                  "Edit",
                  "Equipment Type-Edit"
                ],
                [
                  "Delete",
                  "Equipment Type-Delete"
                ]
              ]
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "This must be configured before the rest of the system can be used meaningfully — you can't create a Container, validate a Movement, or price a Booking's container requirement without it. Keep size naming conventions consistent (e.g. always '20 DV') since several reports group by the extracted Size number."
            }
          ]
        },
        {
          "id": "container-list",
          "title": "Container List",
          "icon": "layers",
          "summary": "Master registry of every physical container (box) the agency works with — global, one row per container code.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "The master registry of every PHYSICAL container in the system — one row per container number. Containers are GLOBAL master data: there is only ONE row per code in the whole system, never duplicated per company. If sister companies handle the same box, they share the exact same row. This is the anchor of the Container Control module."
            },
            {
              "heading": "Access",
              "type": "table",
              "columns": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Menu path",
                  "Container Control → Container List"
                ],
                [
                  "Permission",
                  "Containers (List / Create / Edit / Delete)"
                ],
                [
                  "Feature flag",
                  "containers"
                ]
              ]
            },
            {
              "heading": "Fields stored",
              "type": "table",
              "columns": [
                "Field",
                "Meaning"
              ],
              "rows": [
                [
                  "Code",
                  "Container number, e.g. MSCU1234567 — unique across the ENTIRE system"
                ],
                [
                  "Equipment Type",
                  "Required link to Equipment Types"
                ],
                [
                  "SOC / COC",
                  "Shipper-Owned vs Carrier-Owned — drives rules in Movement Control"
                ],
                [
                  "Operator Code",
                  "The line currently operating this box; defaults to the creator's own line code if blank"
                ],
                [
                  "Container Ownership",
                  "Free text / classification, informational"
                ],
                [
                  "Tare Weight / Max Payload / Production Year",
                  "Optional numeric specs"
                ],
                [
                  "Certificate",
                  "Uploaded file (e.g. CSC plate certificate)"
                ],
                [
                  "In Stock",
                  "Auto-calculated flag — NOT set manually once movement history exists"
                ],
                [
                  "Created By",
                  "Auto-stamped creating user"
                ]
              ]
            },
            {
              "heading": "Default visibility rule",
              "type": "callout",
              "style": "info",
              "content": "By default the list only shows containers whose Operator Code matches the logged-in user's own line, is blank/unclaimed, or is an unrecognized code. This is bypassed when searching a specific container number, a specific Voyage, or filtering explicitly by Operator Code (multi-line companies) — a 'Cross' toggle widens a voyage search across sister companies too."
            },
            {
              "heading": "Search filters",
              "type": "rules",
              "items": [
                "Container Number (single or many, pasted)",
                "Equipment Type / SOC-COC / Created By",
                "In Stock — multi-select: Available / Not Available / Damaged / OFHR / WTOR",
                "Vessel / Voyage (+ Shipment) / Leg",
                "Operator Code — multi-select, multi-line ('MLH') companies only"
              ]
            },
            {
              "heading": "Stock status badges (derived live)",
              "type": "table",
              "columns": [
                "Badge",
                "Condition"
              ],
              "rows": [
                [
                  "Damaged",
                  "Latest movement activity = SNTR"
                ],
                [
                  "OFHR",
                  "Latest movement activity = OFHR"
                ],
                [
                  "WTOR",
                  "Latest movement activity = WTOR"
                ],
                [
                  "Available",
                  "None of the above AND in_stock = 1"
                ],
                [
                  "Not Available",
                  "None of the above AND in_stock = 0"
                ]
              ]
            },
            {
              "heading": "Create rules",
              "type": "rules",
              "items": [
                "Required: Equipment Type, Code, SOC/COC.",
                "Code format: 4 letters + 7 digits + checksum (browser check); server only checks 4 letters + 7 digits + 11 chars. 'Force Insert' can override checksum-only failures.",
                "Global uniqueness — code must not exist anywhere in the system.",
                "Operator Code defaults to the creating user's own line code if left blank.",
                "Certificate upload is stored under /certificat and linked after creation."
              ]
            },
            {
              "heading": "Edit rules & stock behaviour",
              "type": "rules",
              "items": [
                "Same code-format and uniqueness rules as create (excluding itself).",
                "No movement history yet → In Stock is directly editable.",
                "Has movement history → submitted In Stock value is IGNORED; it's recalculated from the latest movement instead ('Stock status determined by movements.').",
                "Edit screen shows read-only info: movement count, latest movement (activity + date + recording company)."
              ]
            },
            {
              "heading": "How 'In Stock' is calculated",
              "type": "steps",
              "items": [
                "No movement at all → In Stock = No",
                "Latest movement is one of: On Hire, Receive From Consignee, Discharge Empty, Received Empty, Transfer Empty, Container Swapping, Gate In Empty, Received From Repair, Trangulation → In Stock = Yes",
                "Any other latest activity → In Stock = No"
              ]
            },
            {
              "heading": "Special case",
              "type": "callout",
              "style": "warning",
              "content": "For agencies with line code OVP or OSL, an 'OFF Hire' movement ALSO counts as In Stock = Yes — this differs from the general rule where OFF Hire would not be a stock-in event."
            },
            {
              "heading": "Delete rules",
              "type": "callout",
              "style": "danger",
              "content": "Cannot delete a container that has any related Movement, Booking, Container Repair, or Cost/BL invoice records. Only a container with zero history anywhere can be removed."
            },
            {
              "heading": "Bulk Import — Template / Upload / Overwrite",
              "type": "rules",
              "items": [
                "Template — static xlsx with expected columns (container_no, equipment_type, soc_coc, tare_weight, max_payload, production_year, container_ownership, operator_code, in_stock).",
                "Import (Upload) — creates NEW containers only, keyed by container_no. Real ISO-6346 check-digit validation (skippable via Force Insert). Equipment Type must match exactly. Operator Code must exist in the active Operator Codes list. Failing rows are skipped and reported in a downloadable error report — passing rows still import.",
                "Overwrite (auto-detect) — if the sheet only has container_no + operator_code, it's treated as a bulk Operator Code re-assignment (validated against active Operator Codes).",
                "Overwrite (full mode) — matches rows by internal ID, requires SOC/COC, and only overwrites In Stock if the cell isn't empty."
              ]
            },
            {
              "heading": "Overwrite gap to know about",
              "type": "callout",
              "style": "danger",
              "content": "Full Overwrite mode does NOT validate operator_code against the Operator Codes master list at all (unlike Import) — it's technically possible to bulk-write an operator code that doesn't exist. Prefer the 'Operator Code only' auto-detect mode or the Movement Control 'Assign Operator' tool for operator code changes."
            },
            {
              "heading": "Export",
              "type": "text",
              "content": "Downloads containers.xlsx using the same filters currently applied on screen. Columns: id, container_no, equipment_type, soc_coc, tare_weight, max_payload, production_year, container_ownership, operator_code, in_stock, last_move. Multi-line ('MLH') companies get an extra 'line' column flagging when the latest mover differs from the operator_code on file."
            },
            {
              "heading": "Permissions",
              "type": "table",
              "columns": [
                "Action",
                "Permission code"
              ],
              "rows": [
                [
                  "View list / Export",
                  "Containers-List"
                ],
                [
                  "Create / Import",
                  "Containers-Create"
                ],
                [
                  "Edit",
                  "Containers-Edit"
                ],
                [
                  "Delete",
                  "Containers-Delete"
                ]
              ]
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "The single source of truth for 'what boxes do we have and what is their basic profile.' Stock Status is NOT typed in — it's a live reflection of Movement Control history. If Stock Status ever looks wrong, fix the Movement history, not the Container edit form."
            }
          ]
        },
        {
          "id": "equipment-status",
          "title": "Equipment Status (Radar)",
          "icon": "activity",
          "summary": "A read-only dashboard summarizing container counts per Equipment Type, split into status buckets.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "A single summary dashboard answering: 'How many containers do we have, per Equipment Type, and what state is each group in right now?' It's read-only — every number is a live count of Container List rows grouped by Equipment Type. Clicking any number jumps straight into a pre-filtered Container List."
            },
            {
              "heading": "Access",
              "type": "table",
              "columns": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Menu path",
                  "Container Control → Equipment Status"
                ],
                [
                  "Permission",
                  "Containers-List (shared with Container List — no separate permission)"
                ]
              ]
            },
            {
              "heading": "Table columns",
              "type": "table",
              "columns": [
                "Column",
                "Meaning"
              ],
              "rows": [
                [
                  "Available",
                  "In stock and not flagged Damaged/Off-Hire/WTOR"
                ],
                [
                  "Not Available",
                  "Not in stock and not flagged Damaged/Off-Hire/WTOR"
                ],
                [
                  "Damaged",
                  "Latest movement = SNTR (Sent to Repair)"
                ],
                [
                  "Off Hire",
                  "Latest movement = OFHR"
                ],
                [
                  "WTOR",
                  "Latest movement = WTOR (Waiting To Release)"
                ],
                [
                  "Total",
                  "Sum of the 5 buckets, all statuses"
                ]
              ]
            },
            {
              "heading": "Bucket priority order",
              "type": "steps",
              "items": [
                "Latest movement = SNTR → Damaged",
                "Latest movement = OFHR → Off Hire",
                "Latest movement = WTOR → WTOR",
                "Otherwise split by in_stock flag: 1 = Available, 0 = Not Available"
              ]
            },
            {
              "heading": "Scope: fleet-wide, not per-line",
              "type": "callout",
              "style": "warning",
              "content": "Unlike Container List, Radar counts EVERY container in the system for every Equipment Type — it does NOT apply the 'only my own line' default visibility rule. It shows the whole physical fleet regardless of Operator Code."
            },
            {
              "heading": "Caching behaviour",
              "type": "callout",
              "style": "info",
              "content": "Results are cached for 5 minutes under 'container_radar_stats' (shared with the Dashboard widget). Cache clears immediately on container create/update/delete/import/overwrite — but NOT when a Movement record itself changes, so Radar can be up to 5 minutes stale right after a Gate-In or Sent-to-Repair movement. It self-corrects once the cache expires or a container record is next touched."
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "The fastest way to answer 'what do we have, and is it usable?' without manually filtering the full Container List. Every cell doubles as a navigation shortcut into the correctly-filtered list."
            }
          ]
        },
        {
          "id": "operator-codes",
          "title": "Operator Codes",
          "icon": "hash",
          "summary": "Global master list of valid shipping-line codes used to validate the Operator Code field system-wide.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "The master list of valid Operator Codes — short codes identifying which shipping line currently owns/operates a container. Unlike most master tables, this list is GLOBAL (no company_id) — one shared list for every company on the platform."
            },
            {
              "heading": "Access",
              "type": "table",
              "columns": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Menu path",
                  "Container Control → Operator Codes"
                ],
                [
                  "Permission",
                  "Containers (reuses the Containers permission group — no dedicated 'Operator Code' permission)"
                ]
              ]
            },
            {
              "heading": "Validates these fields elsewhere",
              "type": "rules",
              "items": [
                "Container List — dropdown only offers ACTIVE codes; Import rejects unknown codes",
                "Movement Control — Import rejects unknown codes; 'Assign Operator' bulk tool reads from here"
              ]
            },
            {
              "heading": "Fields stored",
              "type": "table",
              "columns": [
                "Field",
                "Meaning"
              ],
              "rows": [
                [
                  "Code",
                  "Short code (e.g. 'MSC') — always stored UPPERCASE + trimmed, unique system-wide"
                ],
                [
                  "Name",
                  "Optional label — the operator/line's full name"
                ],
                [
                  "Is Active",
                  "Only Active codes appear in dropdowns; inactive stay for history"
                ],
                [
                  "Created By",
                  "Auto-stamped creating user"
                ]
              ]
            },
            {
              "heading": "List screen",
              "type": "text",
              "content": "Paginated (30/page), alphabetical by Code. Shows Code, Name, Status badge, and a live CONTAINERS count of how many Container List rows currently use this exact code (quick 'in use' signal before editing/deleting)."
            },
            {
              "heading": "Create / Edit rules",
              "type": "rules",
              "items": [
                "Code required, auto-uppercased + trimmed; Name optional.",
                "Code must be unique system-wide (excluding itself on edit).",
                "New codes are always Active by default — no toggle on the Add form.",
                "Edit modal adds an 'Active' toggle — the only place is_active is changed.",
                "Turning a code off does NOT touch existing Container/Movement records already using it."
              ]
            },
            {
              "heading": "Delete rule — soft protection",
              "type": "callout",
              "style": "warning",
              "content": "Operator Code is stored as plain text (no foreign key), so deletion is checked manually: if ANY Container or Movement row uses this code, it is NOT deleted — instead it's automatically DEACTIVATED ('Operator Code is in use — deactivated instead of deleted.'). Only a code with zero usage anywhere is actually deleted."
            },
            {
              "heading": "'Refresh' bulk sync",
              "type": "steps",
              "items": [
                "Scans every Company with a non-empty Line Code (excluding the internal 'YARD' company)",
                "For each distinct Line Code: if it already exists here, it's skipped untouched",
                "If it doesn't exist, a new Active Operator Code is created using the company's Line Name",
                "Reports back: 'X new code(s) added, Y already existed.' — purely additive, never edits/deactivates/deletes"
              ]
            },
            {
              "heading": "Permissions",
              "type": "table",
              "columns": [
                "Action",
                "Permission code"
              ],
              "rows": [
                [
                  "View list",
                  "Containers-List"
                ],
                [
                  "Create + Refresh",
                  "Containers-Create"
                ],
                [
                  "Edit",
                  "Containers-Edit"
                ],
                [
                  "Delete (or auto-deactivate)",
                  "Containers-Delete"
                ]
              ]
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "The gatekeeper for the Operator Code field across Containers and Movements. If a valid line code seems to be rejected everywhere, check here first: it either doesn't exist yet, or exists but is marked Inactive. Note: the Container 'Full Overwrite' import path bypasses this check entirely."
            }
          ]
        },
        {
          "id": "damage-list",
          "title": "Damage List",
          "icon": "alert-triangle",
          "summary": "A price catalogue of standard damage types & repair rates — NOT a live log of currently-damaged containers.",
          "sections": [
            {
              "heading": "Naming clarification — read first",
              "type": "callout",
              "style": "danger",
              "content": "Despite the name, this screen is NOT a log of currently-damaged containers (that's the 'Damaged' badge on Container List / Equipment Status, driven by Movement Control's SNTR activity). This is a MASTER CATALOGUE / PRICE LIST of possible damage types and their standard repair cost — e.g. 'Dented panel — $45 per unit.' The Container Repair screen picks from this list."
            },
            {
              "heading": "Access",
              "type": "table",
              "columns": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Menu path",
                  "Container Control → Damage List"
                ],
                [
                  "Permissions",
                  "Damage-List / Damage-Create / Damage-Show / Damage-Delete"
                ]
              ]
            },
            {
              "heading": "General vs Depot-specific damages",
              "type": "table",
              "columns": [
                "Bucket",
                "Rule"
              ],
              "rows": [
                [
                  "General Damages",
                  "depo_id = 'all' — applies everywhere, pinned at the top of page 1"
                ],
                [
                  "Depot-Specific",
                  "depo_id = a Terminal ID (type = 4 / 'depot' terminals only)"
                ]
              ]
            },
            {
              "heading": "Fields per damage type",
              "type": "table",
              "columns": [
                "Field",
                "Meaning"
              ],
              "rows": [
                [
                  "Damage Description",
                  "Required free text, e.g. 'Dented side panel'"
                ],
                [
                  "Repair Type",
                  "Optional note on how it's normally fixed"
                ],
                [
                  "Unit Type",
                  "Optional billing unit, e.g. 'per panel', 'flat rate'"
                ],
                [
                  "Unit Rate",
                  "Optional standard cost"
                ]
              ]
            },
            {
              "heading": "List screen",
              "type": "text",
              "content": "One row per depot (Terminal type 4) plus a pinned 'General Damages' row. An eye icon opens a searchable mini-table modal of that depot's damage types; a '+' icon opens the full add/edit page for that bucket."
            },
            {
              "heading": "Add/Edit rules (per depot or General)",
              "type": "rules",
              "items": [
                "One repeatable-row screen handles both add and edit for a bucket at once.",
                "Damage Description required per row; Repair Type / Unit Type / Unit Rate optional.",
                "Duplicate check within the same bucket: (Description + Unit Type + Unit Rate) must be unique, case-insensitive & trimmed.",
                "Rows with an existing ID are updated in place; rows without an ID are inserted new.",
                "Duplicates in a batch are skipped and reported — other valid rows in the same submit still save."
              ]
            },
            {
              "heading": "Delete rule",
              "type": "callout",
              "style": "info",
              "content": "Deletion is immediate — no confirmation guard, no 'in use' protection (unlike Operator Codes). This is safe because real Container Repair records store their own damage description text independently, so deleting a catalogue entry never retroactively changes a past repair."
            },
            {
              "heading": "Bulk Import — Template / Upload",
              "type": "rules",
              "items": [
                "Template columns: terminal, description, repair_type, unit_rate, unit_type.",
                "Terminal blank / 'all' / 'general' / 'general damages' → saved as GENERAL. Any other value must match an existing Terminal CODE exactly.",
                "Same duplicate rule as manual forms applies per row.",
                "Every row is attempted — passing rows import immediately, failing rows are listed by row number in a combined result message."
              ]
            },
            {
              "heading": "Permissions",
              "type": "table",
              "columns": [
                "Action",
                "Permission code"
              ],
              "rows": [
                [
                  "View list",
                  "Damage-List"
                ],
                [
                  "View a bucket's list",
                  "Damage-Show"
                ],
                [
                  "Add / Edit / Import / Template",
                  "Damage-Create"
                ],
                [
                  "Delete",
                  "Damage-Delete"
                ]
              ]
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Think of it as the 'price book' for container damages — so anyone logging a real repair can pick from a standardised, pre-approved description and rate instead of re-typing free text every time. Get the General list right for damage that can happen anywhere; only add Depot-Specific entries where cost/description genuinely differs by location."
            }
          ]
        }
      ]
    },
    {
      "id": "storage-detention-power",
      "title": "Storage, Detention & Power",
      "icon": "calculator",
      "modules": []
    },
    {
      "id": "quotations",
      "title": "Quotations",
      "icon": "clipboard",
      "modules": []
    },
    {
      "id": "documentation",
      "title": "Documentation",
      "icon": "file",
      "modules": []
    },
    {
      "id": "edi",
      "title": "EDI",
      "icon": "file-text",
      "modules": []
    },
    {
      "id": "trucking",
      "title": "Trucking",
      "icon": "truck",
      "modules": []
    },
    {
      "id": "accounting",
      "title": "Accounting",
      "icon": "file-text",
      "modules": []
    },
    {
      "id": "custody",
      "title": "Custody",
      "icon": "briefcase",
      "modules": []
    }
  ]
};

/* ============== ICONS ============== */
const ICONS = {
  box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
  layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
  activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
  hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
  'alert-triangle': '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
  info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',
  search: '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
  'chevron-right': '<polyline points="9 18 15 12 9 6"></polyline>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
  'file-text': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
  file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
  anchor: '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
  calculator: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><rect x="8" y="6" width="8" height="4"></rect><line x1="8" y1="14" x2="8.01" y2="14"></line><line x1="12" y1="14" x2="12.01" y2="14"></line><line x1="16" y1="14" x2="16.01" y2="14"></line><line x1="8" y1="18" x2="8.01" y2="18"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="16" y1="18" x2="16.01" y2="18"></line>',
  clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
  truck: '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 3H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z"></path>'
};

function svg(iconKey, size){
  size = size || 18;
  const inner = ICONS[iconKey] || ICONS.box;
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
}

const CALLOUT_ICON = { info: 'info', warning: 'alert-triangle', danger: 'alert-triangle' };

/* ============== STATE ============== */
const LAST_ROUTE_KEY = 'dejatech-docs-last-route';
let DATA = null;
let activeTabId = null;
let activeModuleId = null;
let openTabId = null;

function saveLastRoute(tabId, moduleId){
  if (!tabId || !moduleId) return;
  try {
    localStorage.setItem(LAST_ROUTE_KEY, JSON.stringify({ tabId, moduleId }));
  } catch (_) {}
}

function clearLastRoute(){
  try {
    localStorage.removeItem(LAST_ROUTE_KEY);
  } catch (_) {}
}

function getSavedRoute(){
  try {
    const raw = localStorage.getItem(LAST_ROUTE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    const tab = DATA.tabs.find(t => t.id === parsed.tabId);
    if (!tab) return null;
    const mod = (tab.modules || []).find(m => m.id === parsed.moduleId);
    if (!mod) return null;
    return { tabId: tab.id, moduleId: mod.id };
  } catch (_) {
    return null;
  }
}

/* ============== RENDER: SECTIONS ============== */
function renderSection(section){
  let inner = '';

  switch(section.type){
    case 'text':
      inner = `<p class="text">${section.content}</p>`;
      break;

    case 'table': {
      const cols = section.columns || [];
      const rows = section.rows || [];
      inner = `<table class="doc-table"><thead><tr>${
        cols.map(c => `<th>${c}</th>`).join('')
      }</tr></thead><tbody>${
        rows.map(r => `<tr>${r.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')
      }</tbody></table>`;
      break;
    }

    case 'rules':
      inner = `<ul class="rules-list">${
        (section.items || []).map(i => `<li>${i}</li>`).join('')
      }</ul>`;
      break;

    case 'steps':
      inner = `<ol class="steps-list">${
        (section.items || []).map((i, idx) => `<li><span class="step-num">${idx + 1}</span><span>${i}</span></li>`).join('')
      }</ol>`;
      break;

    case 'callout': {
      const style = section.style || 'info';
      inner = `<div class="callout ${style}">${svg(CALLOUT_ICON[style] || 'info', 18)}<span>${section.content}</span></div>`;
      break;
    }

    default:
      inner = `<p class="text">${section.content || ''}</p>`;
  }

  return `<div class="section-card" data-heading="${(section.heading || '').toLowerCase()}" data-body="${stripHtml(inner).toLowerCase()}">
      ${section.heading ? `<h3>${section.heading}</h3>` : ''}
      ${inner}
    </div>`;
}

function stripHtml(html){
  return html.replace(/<[^>]*>/g, ' ');
}

/* ============== RENDER: NAV (Tabs -> Modules) ============== */
function renderNav(){
  const navList = document.getElementById('navList');
  navList.innerHTML = DATA.tabs.map(tab => {
    const isOpen = openTabId === tab.id;
    const isActiveTab = tab.id === activeTabId;
    const hasModules = tab.modules && tab.modules.length > 0;

    const subItemsHtml = hasModules
      ? tab.modules.map(m => {
          const isActiveModule = isActiveTab && m.id === activeModuleId;
          return `<div class="nav-sub-link ${isActiveModule ? 'active' : ''}" data-tab="${tab.id}" data-module="${m.id}">${m.title}</div>`;
        }).join('')
      : `<div class="nav-sub-empty">No documentation yet</div>`;

    return `
    <div class="nav-group ${isOpen ? 'open' : ''} ${isActiveTab ? 'active' : ''}" data-id="${tab.id}">
      <div class="nav-group-header" data-id="${tab.id}">
        ${svg(tab.icon, 18)}
        <span class="nav-group-title">${tab.title}</span>
        <span class="nav-chevron">${svg('chevron-right', 14)}</span>
      </div>
      <div class="nav-submenu">
        <div class="nav-submenu-inner">${subItemsHtml}</div>
      </div>
    </div>`;
  }).join('');

  navList.querySelectorAll('.nav-group-header').forEach(header => {
    header.addEventListener('click', () => {
      const id = header.getAttribute('data-id');
      openTabId = (openTabId === id) ? null : id;
      renderNav();
    });
  });

  navList.querySelectorAll('.nav-sub-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
      const tabId = link.getAttribute('data-tab');
      const moduleId = link.getAttribute('data-module');
      openTabId = tabId;
      location.hash = `${tabId}/${moduleId}`;
      closeSidebarMobile();
    });
  });
}

/* ============== RENDER: HOME (logo only) ============== */
function renderHome(){
  activeTabId = null;
  activeModuleId = null;
  document.body.classList.add('is-home');

  document.getElementById('breadcrumbTab').textContent = 'Documentation';
  document.getElementById('breadcrumbActive').textContent = 'Home';
  document.getElementById('moduleTitle').textContent = 'Dejatech';
  document.getElementById('moduleSummary').textContent = '';
  document.getElementById('titleIcon').innerHTML = '';
  document.title = 'Dejatech Documentation';
  document.getElementById('searchInput').value = '';

  document.getElementById('contentBody').innerHTML = `
    <div class="home-logo-page">
      <div class="home-logo-circle is-loading" id="homeLogoCircle">
        <div class="home-loader" aria-hidden="true"></div>
        <div class="home-content">
          <img class="home-logo" id="homeLogoImg" src="logos/dejatech-logo-white-stacked.png" alt="Dejatech">
          <p class="home-tagline">Product documentation</p>
          <p class="home-hint">Select a module from the sidebar</p>
        </div>
      </div>
    </div>`;

  const circle = document.getElementById('homeLogoCircle');
  const img = document.getElementById('homeLogoImg');

  function revealHome(){
    if (!circle || circle.classList.contains('is-ready')) return;
    circle.classList.remove('is-loading');
    circle.classList.add('is-ready');
  }

  if (img.complete && img.naturalWidth > 0) {
    revealHome();
  } else {
    img.addEventListener('load', revealHome, { once: true });
    img.addEventListener('error', revealHome, { once: true });
  }

  renderNav();
}

/* ============== RENDER: PAGE (a module inside a tab) ============== */
function renderPage(tabId, moduleId){
  const tab = DATA.tabs.find(t => t.id === tabId);
  if (!tab) {
    renderHome();
    return;
  }

  document.body.classList.remove('is-home');
  activeTabId = tab.id;
  openTabId = tab.id;

  document.getElementById('breadcrumbTab').textContent = tab.title;

  if (!tab.modules || !tab.modules.length) {
    activeModuleId = null;
    renderEmptyTab(tab);
    renderNav();
    return;
  }

  const mod = tab.modules.find(m => m.id === moduleId) || tab.modules[0];
  activeModuleId = mod.id;
  saveLastRoute(tab.id, mod.id);

  document.getElementById('breadcrumbActive').textContent = mod.title;
  document.getElementById('moduleTitle').textContent = mod.title;
  document.getElementById('moduleSummary').textContent = mod.summary || '';
  document.getElementById('titleIcon').innerHTML = svg(mod.icon, 24);
  document.title = mod.title + ' · Dejatech Docs';

  const body = document.getElementById('contentBody');
  body.innerHTML = mod.sections.map(renderSection).join('');
  document.getElementById('searchInput').value = '';

  renderNav();
}

function renderEmptyTab(tab){
  document.getElementById('breadcrumbActive').textContent = tab.title;
  document.getElementById('moduleTitle').textContent = tab.title;
  document.getElementById('moduleSummary').textContent = '';
  document.getElementById('titleIcon').innerHTML = svg(tab.icon, 24);
  document.title = tab.title + ' · Dejatech Docs';

  const body = document.getElementById('contentBody');
  body.innerHTML = `
    <div class="empty-state">
      ${svg('info', 40)}
      <div>No documentation has been added yet for <strong style="color:var(--text);">${tab.title}</strong>.</div>
    </div>`;
}

/* ============== SEARCH FILTER ============== */
function applySearch(query){
  const q = query.trim().toLowerCase();
  const cards = document.querySelectorAll('.section-card');
  let visibleCount = 0;
  cards.forEach(card => {
    const matches = !q || card.getAttribute('data-heading').includes(q) || card.getAttribute('data-body').includes(q);
    card.style.display = matches ? '' : 'none';
    if (matches) visibleCount++;
  });

  const body = document.getElementById('contentBody');
  let emptyEl = body.querySelector('.no-results');
  if (visibleCount === 0){
    if (!emptyEl){
      emptyEl = document.createElement('div');
      emptyEl.className = 'empty-state no-results';
      emptyEl.innerHTML = svg('search', 40) + '<div>No sections match your search.</div>';
      body.appendChild(emptyEl);
    }
  } else if (emptyEl){
    emptyEl.remove();
  }
}

/* ============== MOBILE SIDEBAR ============== */
function closeSidebarMobile(){
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
}
document.getElementById('burgerBtn').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('show');
});
document.getElementById('overlay').addEventListener('click', closeSidebarMobile);

/* ============== ROUTING ============== */
function goHome(){
  clearLastRoute();
  if (location.hash) {
    location.hash = '';
  } else {
    renderHome();
  }
}

function handleHashChange(){
  const raw = location.hash.replace(/^#\/?/, '');
  if (!raw) {
    renderHome();
    return;
  }
  const [tabId, moduleId] = raw.split('/');
  renderPage(tabId, moduleId);
}
window.addEventListener('hashchange', handleHashChange);

document.getElementById('searchInput').addEventListener('input', (e) => applySearch(e.target.value));
document.addEventListener('keydown', (e) => {
  const search = document.getElementById('searchInput');
  if (e.key === '/' && document.activeElement !== search) {
    e.preventDefault();
    search.focus();
  } else if (e.key === 'Escape' && document.activeElement === search) {
    search.value = '';
    applySearch('');
    search.blur();
  }
});

/* ============== INIT ============== */
function showLoadError(reason){
  const body = document.getElementById('contentBody');
  body.innerHTML = `
    <div class="empty-state" style="max-width:520px; margin:0 auto; text-align:left;">
      ${svg('alert-triangle', 36)}
      <h3 style="margin:14px 0 8px; color:var(--text); font-size:16px;">Could not load data</h3>
      <p style="color:var(--text-dim); font-size:13.5px; line-height:1.7;">
        The embedded documentation data in <code>file.js</code> is missing or invalid.
      </p>
      <p style="color:var(--text-dim); font-size:12px;">Details: ${reason}</p>
    </div>`;
}

try {
  const json = window.DOCS_DATA;
  if (!json || !json.tabs) throw new Error('Embedded documentation data is missing or invalid.');
  DATA = json;
  document.getElementById('appTitle').textContent = json.appTitle || 'Business Logic Docs';
  document.getElementById('appSubtitle').textContent = json.appSubtitle || '';

  document.querySelectorAll('.brand, .mobile-brand').forEach(el => {
    el.style.cursor = 'pointer';
    el.setAttribute('role', 'button');
    el.setAttribute('aria-label', 'Go to home');
    el.addEventListener('click', goHome);
  });

  // Restore the last module the user opened, otherwise start on the logo page.
  if (!location.hash.replace(/^#\/?/, '')) {
    const saved = getSavedRoute();
    if (saved) {
      history.replaceState(null, '', `#${saved.tabId}/${saved.moduleId}`);
    }
  }
  handleHashChange();
} catch (err) {
  console.error(err);
  showLoadError(err && err.message ? err.message : String(err));
}
