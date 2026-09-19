window.DOCS_DATA = {
  "appTitle": "Dejatech Docs",
  "appSubtitle": "Shipping agency documentation",
  "tabs": [
    {
      "id": "administration",
      "title": "Administration",
      "icon": "user",
      "modules": [
        {
          "id": "users",
          "title": "Users",
          "icon": "user",
          "summary": "Central identity registry — accounts, roles, company-line access, and login credentials that every document and audit trail links back to.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "The master registry of every system user — the login identity, role assignment, and company-line access behind every document, invoice, booking, and container movement created in the system. Every operational record stores who created it, so this screen is the anchor for accountability and audit trails."
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
                  "Administration → Users"
                ],
                [
                  "Route",
                  "users.index"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Users",
                  "desc": "Sidebar → Administration → Users.",
                  "icon": "users"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Search & Locate",
                  "desc": "Filter by name, email, role, company, or active status.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Choose an Action",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Create User",
                    "Edit User",
                    "Bulk Update",
                    "Delete"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Enter Details & Save",
                  "desc": "Set credentials, role, company-line access, and active flag.",
                  "icon": "clipboard"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "System Validates",
                  "tone": "system",
                  "desc": "Checks unique email/login, role assignment, and company access.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "User Ready in System",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Can sign in with assigned role permissions",
                    "Linked to documents and audit trails"
                  ]
                }
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
                  "Full Name",
                  "Required, max 128 characters"
                ],
                [
                  "User Name",
                  "Required and unique system-wide; 4-30 chars, letters/numbers/dot/underscore/dash only; used to log in"
                ],
                [
                  "Email",
                  "Required and unique system-wide; used for notifications and password resets"
                ],
                [
                  "Password",
                  "Required on create (min 6, confirmed); optional on edit — leaving it blank keeps the existing password"
                ],
                [
                  "Employee Number",
                  "Optional unique integer; internal HR/staff ID"
                ],
                [
                  "Role",
                  "Dropdown of configured Roles; grants the account its permissions"
                ],
                [
                  "Assigned Companies",
                  "Multi-select of company codes/branches the user may switch between"
                ],
                [
                  "Primary Company",
                  "Default active company context for the account"
                ],
                [
                  "Avatar",
                  "Optional image (JPG/PNG up to 5MB)"
                ],
                [
                  "Status",
                  "Active / Inactive; inactive users cannot log in"
                ]
              ]
            },
            {
              "heading": "Auto-inactive rule",
              "type": "callout",
              "style": "warning",
              "content": "Saving a user with no Role selected automatically forces the account to Inactive (is_active = 0), preventing an unprivileged account from being left active."
            },
            {
              "heading": "Listing & search",
              "type": "text",
              "content": "Paginated 30 per page, ordered alphabetically by username. Filters: Username, Full Name, Status, Role, Company Code, and Country."
            },
            {
              "heading": "Bulk actions",
              "type": "rules",
              "items": [
                "Bulk Assign Company Code — attach one or more company codes to every selected user at once.",
                "Bulk Toggle Status — flip active/inactive for the selected users; an administrator cannot toggle their own status.",
                "Reset Assigned Lines — refresh assigned company-line mappings for all users after new company branches are added."
              ]
            },
            {
              "heading": "Create & edit rules",
              "type": "rules",
              "items": [
                "Username, Email, and Employee Number (when provided) must each be unique system-wide; edit checks exclude the user being updated.",
                "Password is required on create and optional on edit.",
                "Assigned company codes resolve into the assigned_lines relation, which is what lets a user switch company context from their own Profile screen."
              ]
            },
            {
              "heading": "Profile & activity metrics",
              "type": "text",
              "content": "Each user has a personal Profile screen showing account details plus live counters: total Quotations, Export BLs, Import Bookings, and Invoices created by that user. Users can update their own avatar and default company line there."
            },
            {
              "heading": "Delete rules",
              "type": "callout",
              "style": "danger",
              "content": "Deleting a user permanently removes the account. Historical documents (quotations, BLs, invoices, activity logs) keep the original creator’s name on file, but the deleted user disappears from staff dropdowns — prefer Inactive over Delete for departed staff when audit continuity matters."
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Users are the identity layer everything else hangs off. Role and Assigned Company misconfiguration is the most common reason staff can't see the branch data they need, and forgetting to deactivate departed employees is a real security exposure."
            }
          ]
        },
        {
          "id": "roles",
          "title": "Roles",
          "icon": "hash",
          "summary": "Named permission bundles (job positions) attached to Users — the authorization backbone behind menus, buttons, and controller access checks.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "Defines job-position Roles (e.g. Documentation Manager, Accountant, Sales Agent) and the exact system permissions bundled into each. Rather than granting permissions per user, a Role is attached to a User and every permission enabled on that Role is inherited automatically."
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
                  "Administration → Roles"
                ],
                [
                  "Route",
                  "roles.index"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Roles",
                  "desc": "Sidebar → Administration → Roles.",
                  "icon": "users"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Search & Locate",
                  "desc": "Find a job-position role by name or description.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Choose an Action",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Create Role",
                    "Edit Role",
                    "View Permissions"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Set Permissions & Save",
                  "desc": "Bundle screen/action permissions for the role.",
                  "icon": "clipboard"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "System Applies Access",
                  "tone": "system",
                  "desc": "Users with this role inherit the permission set immediately.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "Role Controls Access",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Users inherit the bundled permissions",
                    "No need to grant permissions per user"
                  ]
                }
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
                  "Role Name",
                  "Required, unique across all roles"
                ],
                [
                  "Company ID",
                  "Auto-linked to the active company context at creation"
                ],
                [
                  "Attached Permissions",
                  "Checklist of permission IDs grouped by module (Booking, Quotations, Invoices, Container Control, Vessel & Voyage, Master Data, etc.)"
                ]
              ]
            },
            {
              "heading": "Listing & search",
              "type": "text",
              "content": "Paginated 30 per page, ordered alphabetically by role name. Columns show the role name, a permission summary, and the users currently assigned to it."
            },
            {
              "heading": "Create & edit rules",
              "type": "rules",
              "items": [
                "Role Name is required and must be unique; the edit check excludes the role being edited.",
                "Permissions can be checked individually or by whole module group.",
                "Saving an edit re-syncs the full permission set and flushes the permission cache immediately, so active sessions pick up the change without needing to log out."
              ]
            },
            {
              "heading": "Viewing role details",
              "type": "text",
              "content": "The Show page renders a read-only, module-grouped breakdown of a role's exact permissions, so an admin can audit what a role can do without risking an accidental edit."
            },
            {
              "heading": "How roles govern access",
              "type": "steps",
              "items": [
                "Sidebar menu items only render if the user's role holds the matching module-list permission.",
                "Create/Edit/Delete/Export/Approve buttons on a screen check role permissions before they render.",
                "Controllers re-check the same permissions server-side through authorization guards, independent of what the UI shows."
              ]
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Over-permissioning a role risks unauthorized financial actions or data changes; under-permissioning blocks routine work like issuing invoices or delivery orders. Because the permission cache is flushed on every save, role edits take effect immediately for users already logged in."
            }
          ]
        },
        {
          "id": "feature-flag",
          "title": "Feature Flags",
          "icon": "activity",
          "summary": "Per-user/company toggles that show or hide entire modules and sub-features without touching data or role permissions.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "An admin control panel that turns whole sub-systems on or off — CRM, Custody, EDI, Trucking Guarantees, Storage/Detention calculations, QuickBooks accounts, and more. Disabling a flag hides the module from the UI (sidebar, buttons, routes) without deleting data or changing role permissions."
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
                  "Administration → Feature Flags"
                ],
                [
                  "Route",
                  "feature-flag.index"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Feature Flags",
                  "desc": "Sidebar → Administration → Feature Flags.",
                  "icon": "activity"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Pick Scope",
                  "desc": "Choose Global or a specific user, then review flag groups.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Toggle Modules",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Enable Flag",
                    "Disable Flag",
                    "Apply Per User"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Save Configuration",
                  "desc": "Confirm which CRM, EDI, Custody, Trucking, or QB flags apply.",
                  "icon": "clipboard"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "System Rebuilds Menus",
                  "tone": "system",
                  "desc": "Sidebar and routes hide/show based on the saved flags.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "Modules Reflect Flags",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Disabled modules disappear from the UI",
                    "Enabled modules become reachable immediately"
                  ]
                }
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
                  "User ID",
                  "The account the flag setting applies to; left unselected edits the company default/global scope"
                ],
                [
                  "Flag Key",
                  "Internal string identifier, e.g. custody, demurrage, crm, edi"
                ],
                [
                  "Enabled",
                  "Boolean — 1 = enabled, 0 = disabled"
                ]
              ]
            },
            {
              "heading": "Flag groups",
              "type": "table",
              "columns": [
                "Module group",
                "Example keys"
              ],
              "rows": [
                [
                  "Master Data",
                  "ports_terminals, settings, agents_list, customers_list, suppliers_list, banks, exchange_rates, excel_templates"
                ],
                [
                  "Tariff",
                  "local_port_tariff, charges, demurrage, storage_tariff"
                ],
                [
                  "Vessel & Voyage",
                  "lines, routes, vessels, voyage_list, voyageTDR_list"
                ],
                [
                  "Container Control",
                  "equipment_types, containers, repairs, movement_codes, movement_control"
                ],
                [
                  "Storage/Detention/Power",
                  "dentention, storage, calculation_dentention, calculation_storage, power"
                ],
                [
                  "Quotations",
                  "import_quotation, export_quotation, slot_quotation"
                ],
                [
                  "Documentation",
                  "summary_booking, import_booking, export_booking, do_print_counter, bl_gates, manifest_xml, service_bl"
                ],
                [
                  "EDI",
                  "upload_edi, generate_edi"
                ],
                [
                  "Trucking",
                  "truckers_list, trucker_gates, trucker_guarantees, trucking_tariffs, trucking_orders"
                ],
                [
                  "Accounting",
                  "invoice_gates, receipt_gates, credit_note, refund_gates, customer_statements, costs, qb_accounts"
                ],
                [
                  "CRM",
                  "crm"
                ],
                [
                  "Custody",
                  "custody"
                ]
              ]
            },
            {
              "heading": "User selection & global scope",
              "type": "text",
              "content": "A Super Admin dropdown lets an admin pick any non-super-admin user to view and edit that user's specific flags. Leaving no user selected edits the company's default/global flag state instead."
            },
            {
              "heading": "Save rules",
              "type": "rules",
              "items": [
                "Submitting the form only sends the flag keys that are currently checked.",
                "Every checked key gets an updateOrCreate to enabled = true for the target scope.",
                "Every key left unchecked is updated to enabled = false for that same scope."
              ]
            },
            {
              "heading": "How flags govern the app",
              "type": "steps",
              "items": [
                "Every check runs through the global featureFlagHelper('flag_key') helper.",
                "Sidebar sections and sub-menu links only render when their flag evaluates true.",
                "Screen-level controls (calculators, export buttons, whole action groups) check the same helper before rendering."
              ]
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Different agencies run different business models — one company may not use Custody or EDI at all. Feature Flags let each deployment be tailored without touching code, keeping unused modules out of operational staff's way."
            }
          ]
        },
        {
          "id": "journal",
          "title": "Journal",
          "icon": "file-text",
          "summary": "In-app release-notes / changelog bulletin with per-user read tracking, keeping staff informed of business-logic and workflow changes.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "An internal changelog and release-notes bulletin. Admins publish entries categorized by module; every user can browse, search, and filter historical updates, and the system tracks per-user read/unread state so nothing important gets missed."
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
                  "Navbar/Sidebar → Journal (user view); Admin → Journals (publishing)"
                ],
                [
                  "Route (user view)",
                  "journal"
                ],
                [
                  "Route (admin management)",
                  "journals.index"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Journal",
                  "desc": "Navbar/Sidebar → Journal (users) or Admin → Journals.",
                  "icon": "file-text"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Browse Updates",
                  "desc": "Search and filter release notes by module or date.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Choose a Path",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Mark Read/Unread",
                    "Publish Entry (Admin)",
                    "Edit Entry (Admin)"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Complete the Action",
                  "desc": "Users update read state; admins write categorized changelog entries.",
                  "icon": "clipboard"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "System Tracks State",
                  "tone": "system",
                  "desc": "Per-user read/unread is stored so important notes stay visible.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "Changelog Stays Current",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Users see what is still unread",
                    "Published notes are searchable historically"
                  ]
                }
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
                  "Title",
                  "Required, max 255 characters"
                ],
                [
                  "Module",
                  "Required classification (Booking, Quotations, Invoices, Containers, Voyages, EDI, Trucking, General, etc.)"
                ],
                [
                  "Description",
                  "Required detailed change/feature/bug-fix text"
                ],
                [
                  "Publication Date",
                  "published_at — drives sort order and the month filter"
                ],
                [
                  "Read Status",
                  "Per-user record in user_journal tracking who has read which entry"
                ]
              ]
            },
            {
              "heading": "User view",
              "type": "text",
              "content": "All users see header counters for Unread and Read entries, a free-text search over title/description, a Month filter, and a Module filter."
            },
            {
              "heading": "Read / unread controls",
              "type": "rules",
              "items": [
                "Clicking an unread card marks it read via AJAX and updates the navbar badge live.",
                "A read entry can be flipped back to unread.",
                "'Mark Visible Page as Read' marks the current page's 15 entries at once.",
                "'Mark All as Read' / 'Mark All as Unread' apply to every historical entry for that user."
              ]
            },
            {
              "heading": "Admin publishing",
              "type": "rules",
              "items": [
                "Super Admins create/edit entries with Title, Module, Publication Date, and Description.",
                "Deleting an entry also purges every per-user read-tracking row for it from user_journal."
              ]
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "As calculation formulas, export formats, and validation rules evolve, the Journal reliably notifies operational staff inside the tool they already work in — closing the gap that a hallway announcement or a missed email would leave."
            }
          ]
        },
        {
          "id": "logs",
          "title": "System Logs",
          "icon": "alert-triangle",
          "summary": "Super-admin-only exception/error monitoring dashboard that aggregates runtime failures across every module.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "An exception-monitoring dashboard for Super Administrators. It captures runtime errors, unhandled exceptions, database failures, and EDI transmission errors from every module and presents them as a searchable, aggregated feed instead of raw server log files."
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
                  "Administration → System Logs"
                ],
                [
                  "Route",
                  "logs.index"
                ],
                [
                  "Access",
                  "Super Administrators only"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open System Logs",
                  "desc": "Sidebar → Administration → System Logs (Super Admin only).",
                  "icon": "activity"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Filter Exceptions",
                  "desc": "Narrow by date, module, message, or EDI/runtime error type.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Choose an Action",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Open Detail",
                    "Export",
                    "Clear Logs"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Inspect Grouped Hits",
                  "desc": "Review aggregated exceptions and drill into a single occurrence.",
                  "icon": "clipboard"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "System Aggregates Errors",
                  "tone": "system",
                  "desc": "Repeated exceptions are grouped so patterns are easy to spot.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "Ops Can Act Fast",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Root causes are easier to isolate",
                    "Exports support incident follow-up"
                  ]
                }
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
                  "Level",
                  "error/critical/alert/emergency (errors), warning, or info/debug"
                ],
                [
                  "Message",
                  "Primary exception message summary"
                ],
                [
                  "Context",
                  "Technical detail of the failure: which file, which line, what kind of error, and the full error trail"
                ],
                [
                  "Route Name",
                  "Named route executing when the failure occurred"
                ],
                [
                  "URL & Method",
                  "Full request URL and HTTP method"
                ],
                [
                  "User ID / Company ID",
                  "Who and which company context triggered it"
                ],
                [
                  "Created At",
                  "Exact failure timestamp"
                ]
              ]
            },
            {
              "heading": "Grouped aggregation",
              "type": "callout",
              "style": "info",
              "content": "To avoid drowning in duplicate rows, the listing groups logs by (level + message + route_name) and shows an Occurrence Count plus First Seen / Last Seen timestamps instead of one row per hit."
            },
            {
              "heading": "Listing & filters",
              "type": "text",
              "content": "Paginated 50 grouped entries per page, ordered by Last Seen descending. Header cards total Errors and Warnings for the selected period. Filters: date preset (Today / Last 7 Days / Last 30 Days) or a custom date range, Level, User (only users who triggered a logged error in range), and free-text search over message/URL/route."
            },
            {
              "heading": "Detail view & export",
              "type": "text",
              "content": "Opening a grouped entry shows the latest occurrence with user/role/company context, full request details, and the complete error trail. A Download action exports a plain-text diagnostic file (system-log-{id}.txt) that support can use to investigate."
            },
            {
              "heading": "Clear logs",
              "type": "callout",
              "style": "danger",
              "content": "Clearing logs deletes every record matching the currently applied filters. It is blocked entirely unless a date filter (preset or explicit range) is active, preventing an accidental full-table wipe."
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Failed invoice calculations, broken import routines, or EDI generation errors often fail silently in the background. This screen is how they surface — letting an admin trace the exact user, request, and payload involved before it causes a financial or operational problem."
            }
          ]
        },
        {
          "id": "activity-logs",
          "title": "Activity Logs",
          "icon": "clipboard",
          "summary": "System-wide data audit trail recording every create/update/delete on core business records with full before/after field diffs.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "The application's central audit trail. Every time a user creates, edits, or deletes a tracked business object — Bookings, Quotations, Invoices, Container Control records, Customers, Master Data — an Activity Log entry is written automatically recording who did it, when, and a full field-by-field before/after comparison."
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
                  "Administration → Activity Logs"
                ],
                [
                  "Route",
                  "activity-logs.index"
                ],
                [
                  "Related route",
                  "activity-logs.booking (booking-specific timeline)"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Activity Logs",
                  "desc": "Sidebar → Administration → Activity Logs.",
                  "icon": "activity"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Search the Audit Trail",
                  "desc": "Filter by user, model, action, or date range.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Choose a View",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "General Timeline",
                    "Booking Timeline",
                    "Field Diff Detail"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Inspect the Change",
                  "desc": "Open the entry to see who changed what, and which fields moved.",
                  "icon": "clipboard"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "System Auto-Logs Events",
                  "tone": "system",
                  "desc": "Create/edit/delete of tracked objects writes an audit row automatically.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "Full Accountability",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Every tracked change has a user + timestamp",
                    "Field-level diffs support investigations"
                  ]
                }
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
                  "Log Name",
                  "Model category (Booking, Quotation, Container, Invoice, Customer, etc.)"
                ],
                [
                  "Description",
                  "Human-readable summary with reference numbers, e.g. 'updated Booking BK-202609-001'"
                ],
                [
                  "Event",
                  "created / updated / deleted"
                ],
                [
                  "Subject",
                  "Polymorphic link (subject_type + subject_id) to the exact record changed"
                ],
                [
                  "User (Causer)",
                  "The employee who performed the action"
                ],
                [
                  "Properties (Diffs)",
                  "JSON of old values vs. new values"
                ],
                [
                  "Created At",
                  "Exact action timestamp"
                ]
              ]
            },
            {
              "heading": "Listing & search",
              "type": "text",
              "content": "Paginated 50 per page, newest first. Filters: Event type, Model Type, a reference-number search (BL, booking, container, invoice, or customer code), a free-text description search, and a start/end date range."
            },
            {
              "heading": "Field-by-field diffs",
              "type": "text",
              "content": "Clicking a row opens an AJAX change-summary modal listing each changed field name with its Old Value and New Value side by side — e.g. spotting that a container's tare weight moved from 2,200 kg to 2,400 kg, and who did it and when."
            },
            {
              "heading": "Model-specific audit views",
              "type": "text",
              "content": "Some screens expose their own scoped timeline on top of the central list — e.g. a Booking's action menu opens activity-logs.booking, a full chronological history of every change made to that one booking since creation."
            },
            {
              "heading": "Automatic logging mechanism",
              "type": "callout",
              "style": "info",
              "content": "Logging is automatic via the LogsActivity model trait: any model using it observes its own created/updated/deleted events and records only the fields that actually changed. No controller ever writes a log entry manually."
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Unauthorized or mistaken edits to BL descriptions, freight rates, release statuses, or invoice lines carry real legal and financial weight. Activity Logs make every change traceable to an exact user, timestamp, and field — the difference between an accountable correction and an unexplained discrepancy."
            }
          ]
        }
      ]
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
              "content": "The master catalogue of every billable line item the company can place on an Invoice or Debit (Cost) document, such as Ocean Freight, THC, Storage, or Administration Fee. Documents reference a row from this list rather than accepting a free-typed charge name. Each company maintains its own list."
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
                  "Master Data → Charge Codes"
                ],
                [
                  "Route",
                  "chargesDesc.index"
                ],
                [
                  "Permission",
                  "Charge Codes (List / Create / Edit / Delete)"
                ],
                [
                  "Feature flag",
                  "charges"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Charge Codes",
                  "desc": "Sidebar → Master Data → Charge Codes (requires 'charges' flag).",
                  "icon": "file-text"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Search & Locate",
                  "desc": "Filter by Name, Tax Code, Type, or Category.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Choose an Action",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Add New",
                    "Edit Row",
                    "Delete",
                    "Sync"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Enter Details & Save",
                  "desc": "Fill Name, Tax Portal Code, Type, and optional QB Account.",
                  "icon": "clipboard"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "System Validates",
                  "tone": "system",
                  "desc": "Checks required fields, unique name, and usage locks.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "Ready in System",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Active for Invoices, Costs & Tariffs",
                    "Static seeded codes stay protected"
                  ]
                }
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
                  "Name",
                  "Required display name; unique within the company"
                ],
                [
                  "Tax Portal Code",
                  "Required free-text tax/e-invoicing code, stored in the code column"
                ],
                [
                  "Type",
                  "Invoice (customer charge) or Debit (supplier cost)"
                ],
                [
                  "Category",
                  "Invoice: THC / Admin / Cleaning; Debit: fixed Owner Account option"
                ],
                [
                  "Related Account (QB)",
                  "QuickBooks chart-of-accounts link, shown only when integration is enabled"
                ],
                [
                  "QB Item Name",
                  "Optional name override used in QuickBooks"
                ],
                [
                  "Static Code",
                  "System-only identity used by automatic calculations; not editable on the form"
                ]
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
              "columns": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Menu path",
                  "Master Data → Port & Terminal"
                ],
                [
                  "Sub-screens",
                  "Port & Terminal List / Terminal Mappings"
                ],
                [
                  "Permissions",
                  "Ports-List; Terminals-List additionally for Terminal Mappings"
                ],
                [
                  "Feature flag",
                  "ports_terminals"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Port & Terminal",
                  "desc": "Sidebar → Master Data → Port & Terminal (ports_terminals flag).",
                  "icon": "anchor"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Search Locations",
                  "desc": "Filter ports/terminals by code, name, or country.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Choose an Action",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Add Port/Terminal",
                    "Edit",
                    "Delete",
                    "Map Terminal"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Enter Details & Save",
                  "desc": "Set code, name, country, and terminal-in-port relationships.",
                  "icon": "clipboard"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "System Protects Identity",
                  "tone": "system",
                  "desc": "Static Code stays locked; used ports/terminals cannot be removed.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "Ready for Operations",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Movements and bookings can reference the location",
                    "Terminal mappings feed depot-specific screens"
                  ]
                }
              ]
            },
            {
              "heading": "Fields stored",
              "type": "table",
              "columns": [
                "Record",
                "Fields"
              ],
              "rows": [
                [
                  "Port",
                  "Name, globally unique Code, and Country"
                ],
                [
                  "Terminal / Depot",
                  "Code, Type (Terminal id 3 or Depot id 4), and immutable Static Code"
                ],
                [
                  "Terminal Mapping",
                  "Previous code, the company’s own editable code, and which terminal, port, type and company the row belongs to."
                ]
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
          "id": "agents-list",
          "title": "Agents List",
          "icon": "users",
          "summary": "Company-scoped registry of shipping agents/representatives linked to Principal Lines, referenced by Quotations.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "The catalogue of shipping agents and representatives who act on behalf of the company's vessel lines/principals at various ports and countries — handling local port calls, documentation, and customs clearance. Each Agent links to one or more Principal Lines and is referenced by Quotations when issuing freight offers."
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
                  "Master Data → Agents"
                ],
                [
                  "Route",
                  "agents.index"
                ],
                [
                  "Feature flag",
                  "agents_list"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Agents",
                  "desc": "Sidebar → Master Data → Agents (agents_list flag).",
                  "icon": "users"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Search Agents",
                  "desc": "Filter by name, country, or related principal/line.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Choose an Action",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Add Agent",
                    "Edit Agent",
                    "Delete"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Enter Details & Save",
                  "desc": "Capture agent identity and representation details for the line.",
                  "icon": "clipboard"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "System Validates Record",
                  "tone": "system",
                  "desc": "Required fields and uniqueness rules are checked before save.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "Agent Available Downstream",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Voyages and documentation can pick the agent",
                    "Local handling parties stay consistent"
                  ]
                }
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
                  "Name",
                  "Required; unique within the company"
                ],
                [
                  "Country",
                  "Required dropdown"
                ],
                [
                  "City",
                  "Optional"
                ],
                [
                  "Address / Phone / Email",
                  "Required contact details"
                ],
                [
                  "Principal (Lines)",
                  "Required multi-select of Lines with type 9 or 2 under the current company; stored in the agent_principals pivot table"
                ],
                [
                  "Status (is_active)",
                  "Active / Inactive; inactive agents are hidden from operational dropdowns"
                ],
                [
                  "Company ID",
                  "Multi-company data isolation"
                ]
              ]
            },
            {
              "heading": "Listing & search",
              "type": "text",
              "content": "Paginated 30 per page, ordered by ID. Filters — Name, Country, and Principal (line name) — are combinable. Columns show name, country, city, a bulleted list of linked Principal Lines, and an Active/Inactive badge."
            },
            {
              "heading": "Create & edit rules",
              "type": "rules",
              "items": [
                "Name, Country, Address, Phone, Email, and at least one Principal Line are required.",
                "Name must be unique within the current company; the check excludes the record itself on edit — a duplicate submission shows 'Agent Name Already Exists'.",
                "Selecting Principal Lines writes agent_principals pivot rows; on edit the existing links are deleted and re-inserted with the new selection."
              ]
            },
            {
              "heading": "Delete rules",
              "type": "callout",
              "style": "danger",
              "content": "Before showing the delete confirmation, an AJAX check looks for any Quotation referencing the agent. If one exists, deletion is blocked with 'Sorry, you can't delete this agent. There are quotations related to it.' Only an agent with zero linked quotations can be deleted."
            },
            {
              "heading": "How this feeds other modules",
              "type": "text",
              "content": "Quotations select an Agent to record which office is representing the freight quote. Vessel & Principal Lines use the agent_principals link to filter which agents are valid for a given line when building voyage itineraries and booking documents."
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Accurate agent contact details and Principal Line links keep quotations and freight documents reflecting the correct local representation, and the quotation-linked delete guard prevents breaking historical commercial offers."
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
              "columns": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Menu path",
                  "Master Data → Suppliers List"
                ],
                [
                  "Route",
                  "suppliers.index"
                ],
                [
                  "Permission",
                  "Suppliers (List / Create / Edit / Show / Delete)"
                ],
                [
                  "Feature flag",
                  "suppliers_list"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Suppliers",
                  "desc": "Sidebar → Master Data → Suppliers List (suppliers_list flag).",
                  "icon": "briefcase"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Search Suppliers",
                  "desc": "Locate a depot, trucker, terminal, or service provider.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Choose an Action",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Add Supplier",
                    "Edit Profile",
                    "Manage Charge Items",
                    "Export"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Set Profile & Rates",
                  "desc": "Maintain supplier data and repeatable Charge Item price rows.",
                  "icon": "clipboard"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "System Links Cost Rates",
                  "tone": "system",
                  "desc": "Cost invoices look up supplier charge items for selectable rates.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "Supplier Ready for Costing",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Cost documents can pull negotiated rates",
                    "Export supports offline review"
                  ]
                }
              ]
            },
            {
              "heading": "Supplier profile",
              "type": "table",
              "columns": [
                "Field",
                "Meaning"
              ],
              "rows": [
                [
                  "Name",
                  "Required and unique"
                ],
                [
                  "Country / Address / Phone / Email",
                  "Required supplier and contact information"
                ],
                [
                  "City / Tax Card",
                  "Optional profile information"
                ],
                [
                  "Primary / Secondary Currency",
                  "Currencies normally used by the supplier"
                ],
                [
                  "Contact People",
                  "Repeatable named-contact list"
                ],
                [
                  "Supplier Types",
                  "Any combination of Depot, Services Provider, Seller, Trucker, Lessor, Haulage, Terminal"
                ]
              ]
            },
            {
              "heading": "Charge Item fields",
              "type": "table",
              "columns": [
                "Field group",
                "Meaning"
              ],
              "rows": [
                [
                  "Applicability",
                  "Optional Terminal, Full/Empty status, Shipment Type, Equipment Type, and Cargo Type"
                ],
                [
                  "Classification",
                  "Category, Sub Category, Code, Payer, and optional Equivalent Item"
                ],
                [
                  "Description",
                  "Required service description"
                ],
                [
                  "Price",
                  "Currency and Amount"
                ],
                [
                  "Invoice Type",
                  "Storage / General / THC / Ocean Freight"
                ],
                [
                  "Validity",
                  "Valid From / Valid To date range"
                ]
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
              "columns": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Menu path",
                  "Master Data → Banks"
                ],
                [
                  "Route",
                  "banks.index"
                ],
                [
                  "Permission",
                  "Suppliers permission group (Create / Edit / Show / Delete)"
                ],
                [
                  "Feature flag",
                  "banks"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Banks",
                  "desc": "Sidebar → Master Data → Banks (banks flag).",
                  "icon": "database"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Search Accounts",
                  "desc": "Filter company bank accounts by name, currency, or status.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Choose an Action",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Add Bank",
                    "Edit Bank",
                    "Activate/Deactivate",
                    "Sync"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Enter Details & Save",
                  "desc": "Set account identity, currency, and active status.",
                  "icon": "clipboard"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "System Validates Account",
                  "tone": "system",
                  "desc": "Required fields and delete protection rules are enforced.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "Ready for Receipts",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Receipts can deposit to this company bank",
                    "Sync copies setup to sister companies"
                  ]
                }
              ]
            },
            {
              "heading": "Fields stored",
              "type": "table",
              "columns": [
                "Field",
                "Rule"
              ],
              "rows": [
                [
                  "Name",
                  "Required bank name"
                ],
                [
                  "Branch",
                  "Optional"
                ],
                [
                  "Currency",
                  "Required fixed option: EGP / USD / EUR"
                ],
                [
                  "Account Number",
                  "Required numeric value"
                ],
                [
                  "IBAN / SWIFT Code",
                  "Optional"
                ],
                [
                  "Status",
                  "Active / Inactive; new accounts start Active"
                ]
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
              "content": "Defines the conversion rate for each foreign Currency during an inclusive Date From / Date To period. Rates are global — every company shares the same periods. EGP is excluded because no EGP-to-EGP rate is needed."
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
                  "Master Data → Exchange Rates"
                ],
                [
                  "Route",
                  "exchange-rates.index"
                ],
                [
                  "Permission",
                  "ExchangeRate (List / Create / Edit / Delete)"
                ],
                [
                  "Feature flag",
                  "exchange_rates"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Exchange Rates",
                  "desc": "Sidebar → Master Data → Exchange Rates (exchange_rates flag).",
                  "icon": "calculator"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Find a Period",
                  "desc": "Locate currency rows by date-from / date-to window.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Choose an Action",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Add Rate Period",
                    "Edit Rate",
                    "Delete Period"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Enter Rate & Dates",
                  "desc": "Set foreign currency, rate value, and inclusive date range (EGP excluded).",
                  "icon": "clipboard"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "System Shares Globally",
                  "tone": "system",
                  "desc": "Rates are global and apply across all companies.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "Conversion Ready",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Documents convert using the active period rate",
                    "Overlapping/invalid periods are blocked"
                  ]
                }
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
                  "Currency",
                  "Foreign currency; EGP excluded"
                ],
                [
                  "Rate",
                  "Numeric conversion rate to the base currency"
                ],
                [
                  "Date From / Date To",
                  "Inclusive validity window, non-overlapping for the same currency"
                ]
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
        },
        {
          "id": "excel-templates",
          "title": "Excel Templates",
          "icon": "file-text",
          "summary": "Company layout book for standard Excel exports — which columns appear, in what order, and under what heading. Missing templates fall back to built-in defaults.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "This is the company’s layout book for a small set of Excel exports. It does not create new spreadsheet types and does not hold operational data. Each row is one named export layout for this company: which columns appear, in what order, and under what heading. When a user later clicks Export on Movement Control, Booking, BL Draft or Agency THC Rebate, the matching export reads this layout. If no matching layout exists, that export falls back to its built-in default columns — a missing template is silent, not an error."
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
                  "Master Data → Excel Templates"
                ],
                [
                  "Route (list)",
                  "excel.templates.index"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Excel Templates",
                  "desc": "One row per export type for this company. There is no Create and no Delete.",
                  "icon": "file-text"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Edit a Template",
                  "desc": "Drag columns into the wanted order. Switch non-Required columns on/off. Optionally rename a heading.",
                  "icon": "clipboard"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Container Tracking only",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Save Changes",
                    "Reorder movement-activity columns"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4 · SYSTEM CHECK",
                  "title": "Save Applies Immediately",
                  "tone": "system",
                  "desc": "The next export for that type uses the new layout. No publish step and no cache to clear.",
                  "icon": "activity"
                },
                {
                  "step": 5,
                  "badge": "RESULT",
                  "title": "Exports Use This Layout",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "On columns are written in the saved order with the saved headings",
                    "Off columns are omitted entirely, not left blank"
                  ]
                }
              ]
            },
            {
              "heading": "Header (not edited here)",
              "type": "table",
              "columns": [
                "Field",
                "Meaning"
              ],
              "rows": [
                [
                  "Name",
                  "Display name on the list, e.g. Load List Export. Set when the template is first created. Not editable here."
                ],
                [
                  "Description",
                  "Short purpose text shown on the list. Created with the template, not edited here."
                ],
                [
                  "Type",
                  "Hidden technical key that ties this row to one export class. The list does not show this column."
                ],
                [
                  "Company",
                  "Always the logged-in company. Two companies never share a template row."
                ]
              ]
            },
            {
              "heading": "Column rows (what Edit changes)",
              "type": "table",
              "columns": [
                "Field",
                "Meaning"
              ],
              "rows": [
                [
                  "Heading",
                  "Text printed in the Excel header row. Renaming only changes the label, not the data underneath."
                ],
                [
                  "On / Off",
                  "Whether the column is written into the file. Off columns are omitted entirely."
                ],
                [
                  "Order",
                  "Left-to-right position. Dragging a row updates this; it is saved only on Save Changes."
                ],
                [
                  "Required",
                  "Cannot be switched off. Toggle is locked and a red Required badge is shown."
                ],
                [
                  "Read Only",
                  "Heading cannot be renamed and the on/off toggle is hidden. The row can still be dragged."
                ],
                [
                  "Internal key",
                  "Never shown. This is what the export uses to pick the actual value. Renaming the heading does not change it."
                ]
              ]
            },
            {
              "heading": "The seven layouts created for every company",
              "type": "table",
              "columns": [
                "List name",
                "Used by"
              ],
              "rows": [
                [
                  "All Movments Export",
                  "Movement Control → Export → All Movement. File: AllMovements.xlsx. The spelling Movments is how it is stored."
                ],
                [
                  "Last Movements Export",
                  "Movement Control → Export → Last Movement. File: Filtered_Movements.xlsx. Only the latest movement per container."
                ],
                [
                  "Container Tracking Report Export",
                  "Movement Control → Export → Equipment Tracking. Static columns plus one dynamic column per movement activity."
                ],
                [
                  "Load List Export",
                  "Documentation → Export Booking → Load List. File: Loadlist.xlsx"
                ],
                [
                  "Discharge List Export",
                  "Documentation → Import Booking → Discharge List. File: Dishargelist.xlsx"
                ],
                [
                  "BL Load List Export",
                  "Documentation → BL Draft → BL Loadlist. File: BLloadList.xlsx"
                ],
                [
                  "SOA Export",
                  "Tariffs → Agency THC Rebate → Download → SOA. File: SOA_Report.xlsx"
                ]
              ]
            },
            {
              "heading": "Other Excel buttons are not on this list",
              "type": "callout",
              "style": "info",
              "content": "BL Freight List, Quotation Summary, Summary Movement and similar buttons do not appear here. Those exports use their own built-in columns unless a matching template of that type has been created behind the scenes. This screen has no path to add an eighth template type."
            },
            {
              "heading": "Editing rules",
              "type": "rules",
              "items": [
                "You cannot add a column the export does not already know, or delete a column from the template.",
                "You cannot change Name, Description or Type of the template header.",
                "Empty column name is blocked: Please enter a column name.",
                "Save success: Excel template updated successfully. Failure rolls back the whole save.",
                "There is no Create and no Delete. Templates are born when a company is created and stay for the life of the company.",
                "Empty list text: No templates found. Every matching template loads at once, ordered by Name A–Z."
              ]
            },
            {
              "heading": "Reorder on Container Tracking",
              "type": "rules",
              "items": [
                "Only the Container Tracking template has a movements column. That row is Read Only and shows a Reorder button.",
                "Reorder does not edit the template. It edits this company’s Movement Activity Code list — the same master used by Movement Control.",
                "Drag to set the left-to-right order of activity columns on the Equipment Tracking Excel.",
                "Toggle Off sets that activity’s order to empty — it is then excluded from the tracking Excel and from any other export that uses the same enabled-movement-types list.",
                "Save Order is a separate save from Save Changes on the template."
              ]
            },
            {
              "heading": "How a template gets onto the list",
              "type": "callout",
              "style": "warning",
              "content": "A user never creates these rows by hand. A new company automatically gets the seven templates with default columns. An administrator rebuild reuses an existing header but adds newly introduced columns, removes obsolete ones, and resets heading/order/on-off back to factory defaults — so a rebuild wipes custom layouts. Day-to-day users should only use Edit."
            },
            {
              "heading": "How this feeds the exports",
              "type": "steps",
              "items": [
                "Look up one template for the logged-in company whose Type matches that export.",
                "If a template exists: use only On columns, in the saved Order, with the saved Headings. Required columns are always On.",
                "If no template exists: use the export’s built-in default column list. The export still succeeds.",
                "The file then fills each enabled heading from the live Movement / Booking / BL / SOA data of that run."
              ]
            },
            {
              "heading": "All Movement vs Last Movement",
              "type": "callout",
              "style": "warning",
              "content": "The button All Movement uses the template named All Movments Export. The button Last Movement uses Last Movements Export. Those two names look similar; they are different files and different row sets. Editing the wrong one is the usual reason an export did not pick up a column change."
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "This is the only place operations can change what a standard export looks like without a system change. The two mistakes that actually break a downstream file are editing Last Movements when the user always clicks All Movement (or the other way around), and switching a movement activity off under Reorder, which drops that activity from Equipment Tracking for the whole company."
            }
          ]
        }
      ]
    },
    {
      "id": "crm",
      "title": "CRM",
      "icon": "users",
      "modules": [
        {
          "id": "crm-list",
          "title": "CRM List",
          "icon": "users",
          "summary": "Sales pipeline of opportunities — customer or prospect, routes, volume, stage, and follow-up dates. Does not create quotations or bookings; it can create Customers.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "The sales pipeline. Each CRM record is one sales opportunity with a customer (or a prospect that is not a customer yet): what they ship, on which routes, in which containers, where the deal stands (Stage), when they were last contacted and when to follow up, and which team member owns it. It is a sales-tracking screen: it does not create quotations or bookings. Its only effect on other modules is that it can create Customers."
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
                  "CRM → CRM List"
                ],
                [
                  "Route (list)",
                  "crm.index"
                ],
                [
                  "Feature flag",
                  "crm — only visible when enabled for the company"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open CRM List",
                  "desc": "Sidebar → CRM → CRM List. Admins see every agency record; other users see only their own.",
                  "icon": "users"
                },
                {
                  "step": 2,
                  "badge": "STEP 2 · DECISION",
                  "title": "Choose the Customer",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Existing customer",
                    "New — create Customer now",
                    "Create in CRM — prospect only"
                  ]
                },
                {
                  "step": 3,
                  "badge": "STEP 3",
                  "title": "Fill the Opportunity",
                  "desc": "Shipment type, volume, container types, routes (country / POL / POD / transhipment) and commodities. Set Stage, Customer Existence, Last Contact, Next Follow Up and Assigned To.",
                  "icon": "clipboard"
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Follow Up from the List",
                  "desc": "After each call, click Last Contact / Next Follow Up on the row. Profile → Notifications lists records whose Next Follow Up is today.",
                  "icon": "search"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "Sync a Prospect",
                  "tone": "system",
                  "desc": "When a prospect becomes real, Sync creates a Customer (Primary, not validated) and links this CRM record to it.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "Close as Won or Lost",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Lost requires a reason",
                    "Only one open opportunity (No Respond / Negotiation) is allowed per customer — close the old one before opening a new one"
                  ]
                }
              ]
            },
            {
              "heading": "Fields",
              "type": "table",
              "columns": [
                "Field",
                "Meaning"
              ],
              "rows": [
                [
                  "Customer",
                  "Required. An existing customer from any line of the same agency, “new” (creates a Customer immediately), or “create in CRM” (prospect kept only here: Company Name, Contact Person, Phone)."
                ],
                [
                  "Contact Person",
                  "For an existing customer: the main account or one of that customer’s contact people."
                ],
                [
                  "Shipment Type",
                  "Optional: Import or Export."
                ],
                [
                  "Volume",
                  "Optional free text."
                ],
                [
                  "Container Types",
                  "Optional, multiple."
                ],
                [
                  "Routes",
                  "Optional, one or more rows: Loading Country, POL, Discharge Country, POD, Transhipment. A row is saved only if it has a loading country or a POL."
                ],
                [
                  "Commodity Categories",
                  "Optional, multiple, from a fixed list (Agricultural & Food, Energy & Petroleum, Chemicals, Reefer, Dangerous Goods (IMO), and others)."
                ],
                [
                  "Commodity Description",
                  "Optional free text."
                ],
                [
                  "Stage",
                  "Required: No Respond, Negotiation, Won, Lost."
                ],
                [
                  "Reason for Lost",
                  "Shown and required on the form when Stage is Lost."
                ],
                [
                  "Customer Existence",
                  "Required: No (New Prospect) / Yes (Active Client)."
                ],
                [
                  "Last Contact Date",
                  "Required."
                ],
                [
                  "Next Follow Up",
                  "Optional. Must be after Last Contact Date."
                ],
                [
                  "Assigned To",
                  "Required. Normal users can only assign to themselves; Admins can pick any user of their company."
                ],
                [
                  "Lead Status",
                  "Optional free text (e.g. In Progress, On Hold)."
                ]
              ]
            },
            {
              "heading": "Listing, search & export",
              "type": "rules",
              "items": [
                "Records of all lines (companies) of the same agency are listed together. 20 per page, newest first.",
                "Admins and super admins see every record; other users see only the records assigned to them.",
                "Sortable by Customer Name, Last Contact Date and Next Follow Up.",
                "Search: customer / company name, Shipment Type, Stage, Commodity, POL, POD, Assigned Team Member, Last Contact Date, Next Follow Up, Customer Existence, Container Type.",
                "Stage is coloured green for Won and red for Lost. Last Contact and Next Follow Up can be changed by clicking the date on the row.",
                "Download exports the filtered list to Excel.",
                "Profile menu → Notifications lists records (of the user’s company, and only the user’s own unless Admin) whose Next Follow Up is today."
              ]
            },
            {
              "heading": "Create / edit / delete rules",
              "type": "table",
              "columns": [
                "Rule",
                "Message shown"
              ],
              "rows": [
                [
                  "Customer already has an open record (stage No Respond or Negotiation)",
                  "Cannot create new CRM: This customer already has an active record (Contacted, Negotiation, or No Respond). On edit: Cannot update CRM: … another active record …"
                ],
                [
                  "“New” customer without a name",
                  "Standard required message."
                ],
                [
                  "Company / customer name already used (prospect name unique in CRM; “new” / prospect name must not already exist as a Customer)",
                  "Standard already-been-taken message."
                ],
                [
                  "Next Follow Up not after Last Contact",
                  "Standard must-be-a-date-after message."
                ]
              ]
            },
            {
              "heading": "Quick date changes from the list",
              "type": "rules",
              "items": [
                "Last Contact Date: any valid date.",
                "Next Follow Up: must be after the record’s Last Contact Date (or after today if there is none).",
                "On edit, routes, container types and commodities are replaced by the new selection.",
                "Success messages: CRM record created / updated / deleted successfully.",
                "Deleting asks for confirmation and removes the record with no other checks."
              ]
            },
            {
              "heading": "How this feeds Customers",
              "type": "rules",
              "items": [
                "New from the form: a Customer is created at once in the user’s company, status Primary (not validated), the user as sales person, with the chosen roles. The CRM record is linked to it.",
                "Prospect Sync: the list shows Sync for prospects not synced yet. The user picks at least one customer role; the system creates the Customer (name, phone, contact person, status Primary, sales person = the assigned team member), links the CRM record and marks it synced. Messages: Customer synced successfully / Customer already synced.",
                "The Customer’s related-data view lists and counts its CRM records. CRM records do not block deleting the customer.",
                "Merging two customers moves their CRM records to the kept customer. Customers created from CRM are marked in the customer audit log."
              ]
            },
            {
              "heading": "One open opportunity at a time",
              "type": "callout",
              "style": "warning",
              "content": "A customer can have only one open opportunity at a time (No Respond or Negotiation). Close old records as Won or Lost before opening a new one. Use “create in CRM” for cold prospects so the Customer list is not filled with companies that never ship."
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "CRM is where the sales team tracks every lead, and its dates drive the daily follow-up list. The only operational side-effect is Customer creation — quotations and bookings are still opened separately once the deal is real."
            }
          ]
        }
      ]
    },
    {
      "id": "tariff",
      "title": "Tariff",
      "icon": "file-text",
      "modules": [
        {
          "id": "local-port-tariff",
          "title": "Local Port Tariff",
          "icon": "calculator",
          "summary": "Master rate card for local-port charges by port, terminal, customer and validity period, consumed by Quotations and Invoices.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "A Local Port Tariff is the master rate card used to price local-port charges such as THC, storage and documentation for a specific Port + Terminal and validity period. Quotations and Invoices resolve their rates from its Charge Items rather than accepting freely typed standard prices. A tariff is either Standard (company-wide) or Customized for one Customer."
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
                  "Tariffs → Local Port Tariff"
                ],
                [
                  "Route (list)",
                  "localporttriff.index"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Local Port Tariff",
                  "desc": "Sidebar → Tariffs → Local Port Tariff.",
                  "icon": "calculator"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Choose Scope & Validity",
                  "desc": "Select Port, Terminal, Standard/Customer and Validity From/To.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Choose an Action",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Create",
                    "Edit",
                    "Clone",
                    "Export"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Add Charge Items",
                  "desc": "Set charge, equipment, unit, currency, direction, payer and rates.",
                  "icon": "clipboard"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "System Validates Tariff",
                  "tone": "system",
                  "desc": "Checks duplicate rows, validity and Standard tariff overlap.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "Rates Ready Downstream",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Quotations can select valid tariff charges",
                    "Invoices resolve automatic and additional charges"
                  ]
                }
              ]
            },
            {
              "heading": "Tariff header fields",
              "type": "table",
              "columns": [
                "Field",
                "Meaning"
              ],
              "rows": [
                [
                  "Tariff No",
                  "Auto-generated as [PortCode]-[TerminalCode]-[CustomerName or Standard][-Suffix]-[ValidityFrom].To.[ValidityTo]. Overlapping customized tariffs receive suffixes such as -B or -C."
                ],
                [
                  "Country / Port / Terminal",
                  "Required. The tariff applies to one exact Port + Terminal combination."
                ],
                [
                  "Standard or Customer",
                  "Standard is company-wide; Customer ties the tariff to one specific Customer."
                ],
                [
                  "Validity From / To",
                  "Required. Valid To must be after Valid From; this window controls when the whole tariff is usable."
                ]
              ]
            },
            {
              "heading": "Charge Item fields",
              "type": "table",
              "columns": [
                "Field",
                "Meaning"
              ],
              "rows": [
                [
                  "Charge Name",
                  "Selected from Master Data → Charge Codes. MSL companies only see Invoice-type Charge Codes."
                ],
                [
                  "Equipment Type",
                  "A specific type, All (ID 100), or the 20/40 bulk shortcuts expanded into real equipment-type rows when saved."
                ],
                [
                  "Unit",
                  "Container or Document."
                ],
                [
                  "Selling / IMO / OOG Price",
                  "Base selling rate plus optional higher IMO and OOG rates."
                ],
                [
                  "THC / IMO / OOG Cost",
                  "Reference/margin costs; not used directly in invoice calculation."
                ],
                [
                  "Payer",
                  "Liner, Shipper, Consignee (Conee), or Else."
                ],
                [
                  "Currency",
                  "Currency of the rate."
                ],
                [
                  "Shipment Type",
                  "Import or Export."
                ],
                [
                  "Standard / Customize",
                  "Per-row flag. Customized rows are only offered as additional/manual invoice charges."
                ],
                [
                  "No BL",
                  "Allows the row to be used without a BL/Booking reference."
                ],
                [
                  "Transhipment",
                  "Makes the row exclusive to transhipment bookings; separate from Standard/Customize."
                ]
              ]
            },
            {
              "heading": "20/40 bulk equipment expansion",
              "type": "callout",
              "style": "info",
              "content": "The 20 (All 20ft Types) and 40 (All 40ft Types) shortcuts expand at save time into one row per matching Equipment Type. Explicit rows in the same submission win, preventing silent duplicates."
            },
            {
              "heading": "Duplicate Charge Item guard",
              "type": "callout",
              "style": "danger",
              "content": "Within one tariff, Charge Name + Equipment Type + Currency + Standard/Customize + Shipment Type must be unique. A duplicate blocks the entire Create or Edit save before anything is written."
            },
            {
              "heading": "Standard tariff overlap protection",
              "type": "rules",
              "items": [
                "A Standard tariff cannot overlap another Standard tariff for the same Port + Terminal in any way.",
                "The save is rejected and identifies every conflicting Tariff No.",
                "Customized tariffs are exempt and may overlap for the same customer; the generated suffix keeps them distinguishable."
              ]
            },
            {
              "heading": "Cloning a tariff",
              "type": "table",
              "columns": [
                "Clone path",
                "Behaviour"
              ],
              "rows": [
                [
                  "Standard → Customized",
                  "Copies all Charge Items into a new Customer tariff with the same Port, Terminal and validity dates."
                ],
                [
                  "Expired tariff renewal",
                  "Copies all Charge Items into a new validity period, optionally changing the Standard/Customer target. Standard overlap rules still apply."
                ]
              ]
            },
            {
              "heading": "Quotation consumption",
              "type": "rules",
              "items": [
                "For a destination Port and quotation reference date, Standard tariffs are offered plus the selected Customer’s valid Customized tariff.",
                "Charge Items are filtered by Import/Export direction and Equipment Type (exact type or All/100).",
                "The selected tariff is stored on the Quotation and later reused by an Invoice created from that Quotation."
              ]
            },
            {
              "heading": "Automatic Invoice tariff resolution",
              "type": "steps",
              "items": [
                "Use a Customer-specific tariff for the booking receiver/consignee at the exact Port + Terminal.",
                "Otherwise use the Standard tariff at that exact Port + Terminal.",
                "If no exact terminal match exists, repeat the lookup at the Port while ignoring Terminal.",
                "Filter Charge Items by Equipment Type, currency and Import/Export direction."
              ]
            },
            {
              "heading": "Transhipment tariff isolation",
              "type": "callout",
              "style": "warning",
              "content": "Transhipment bookings ignore Terminal and use only Charge Items with is_transhipment = 1. Standard/customized non-transhipment rows and transhipment rows are completely separate charge pools."
            },
            {
              "heading": "Quotation and additional Invoice charges",
              "type": "rules",
              "items": [
                "An Invoice linked to a confirmed Quotation reuses that Quotation’s chosen tariff.",
                "Additional/manual Invoice charges only offer Customize rows (standard_or_customise = 0) from the same resolved tariff.",
                "Each saved invoice charge stores the exact quotation_triff_details.id as charge_id for traceability."
              ]
            },
            {
              "heading": "THC minimum-rate rule",
              "type": "callout",
              "style": "danger",
              "content": "A THC charge cannot be billed below the tariff rate: OOG rate if set, otherwise IMO rate if set, otherwise the plain Selling Price for that equipment row."
            },
            {
              "heading": "Edit & delete protection",
              "type": "rules",
              "items": [
                "A tariff used by a Quotation or Invoice is marked non-deletable.",
                "Charge Item rows already referenced by Quotations or Invoices cannot be removed during Edit.",
                "Deleting an allowed tariff removes its Charge Items before removing the tariff header.",
                "Expired tariffs are flagged separately for visibility."
              ]
            },
            {
              "heading": "MSL Agency THC Rebate integration",
              "type": "callout",
              "style": "warning",
              "content": "If linked to a confirmed Agency THC Rebate, Edit and Delete are blocked and changes must go through the Rebate workflow. For MSL companies, Create/Update/Clone attempts a reverse sync to Agency Rebate. Sync failures are logged but do not roll back the tariff save; unlinked tariffs expose Sync Status and manual re-sync."
            },
            {
              "heading": "Export",
              "type": "text",
              "content": "The list Export downloads all matching tariffs as a flattened Excel sheet with one row per Charge Item. The Show screen also offers a separate export for one tariff only."
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Local Port Tariff is the pricing engine behind Quotations and Invoices. A missing Charge Item, wrong validity date or wrong Terminal scope is a common reason an expected charge does not appear downstream."
            }
          ]
        },
        {
          "id": "agency-rebate",
          "title": "Agency THC Rebate",
          "icon": "calculator",
          "summary": "Records how THC-style charges are split between liner and agency, then mirrors the confirmed sheet into the Local Port Tariff that Quotations and Invoices actually price from.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "An Agency THC Rebate records how much of a THC-style charge is kept by the local agent versus passed on or shared, plus the commission the agency earns, for a given Port + Terminal + Standard-or-Customer scope and validity window. It is not itself the tariff a customer is billed from. Once confirmed, it is automatically mirrored into a real Local Port Tariff, and that tariff is what Quotations and Invoices price from. The rebate’s own Liner Revenue, Agency Revenue and Commission figures are later read by the Statement of Account (SOA) export."
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
                  "Tariffs → Agency THC Rebate"
                ],
                [
                  "Route (list)",
                  "agency_rebate.index"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Agency THC Rebate",
                  "desc": "Sidebar → Tariffs → Agency THC Rebate.",
                  "icon": "calculator"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Set Scope & Validity",
                  "desc": "Pick Country, Port, Terminal, Standard or Customer, validity dates and optional Agency Commission.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Choose an Action",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Create",
                    "Edit",
                    "Clone",
                    "Import",
                    "Export",
                    "Delete"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Add Charge Rows",
                  "desc": "One THC-style line per Charge, Equipment, Cargo Type, rates, payer, direction, Local/Shared and commission figures.",
                  "icon": "clipboard"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "Save Draft, then Confirm",
                  "tone": "system",
                  "desc": "Draft saves the sheet only. Switching Status to Confirmed and saving again creates or updates the matching Local Port Tariff.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "Tariff & SOA Ready",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Linked Local Port Tariff prices Quotations and Invoices",
                    "Confirmed Shared rows feed SOA liner/agency revenue"
                  ]
                }
              ]
            },
            {
              "heading": "Header fields",
              "type": "table",
              "columns": [
                "Field",
                "Meaning"
              ],
              "rows": [
                [
                  "Agency No",
                  "Auto-generated as [PortCode]-[TerminalCode]-[CustomerName or Standard]-[ValidityFrom].To.[ValidityTo] (dd-mm-yyyy). Regenerates on Edit only if Port, Terminal, Customer or a validity date changes. No auto -B/-C suffix."
                ],
                [
                  "Country / Port / Terminal",
                  "All required. Port is not re-checked as belonging to the chosen Country, nor Terminal to the Port — pick carefully."
                ],
                [
                  "Standard or Customer",
                  "Required. Customer is only required and shown when that choice is selected."
                ],
                [
                  "Validity From / To",
                  "Both required. To must be strictly after From."
                ],
                [
                  "Agency Commission",
                  "Optional header-level percentage/amount, separate from per-row Commission."
                ],
                [
                  "Status",
                  "Draft or Confirmed. There is no Confirm button — switch the field and Save."
                ]
              ]
            },
            {
              "heading": "Charge detail rows",
              "type": "table",
              "columns": [
                "Field",
                "Meaning"
              ],
              "rows": [
                [
                  "Charge Description",
                  "Charge Codes master row this line is for."
                ],
                [
                  "Local or Shared",
                  "Whether the agency keeps the charge locally or shares it. SOA only totals Liner/Agency Revenue from Shared rows."
                ],
                [
                  "Cargo Type",
                  "All / Dry / IMO / OOG."
                ],
                [
                  "Equipment Type",
                  "A real container type, or All."
                ],
                [
                  "Unit",
                  "Container or Document."
                ],
                [
                  "Currency",
                  "Free-text code — not checked against the Currency master."
                ],
                [
                  "Selling Rate / Payer",
                  "Sold rate. Payer is Liner, Shipper, Consignee or Else."
                ],
                [
                  "Shipment Type",
                  "Import / Export / Empty / Transshipment."
                ],
                [
                  "Full or Empty",
                  "Independent of Shipment Type."
                ],
                [
                  "Revenue / Cost figures",
                  "Base rate and multiply factors feed Liner/Agency Revenue and cost/margin reference."
                ],
                [
                  "Margin / Income Tax / Net",
                  "Typed in directly — not recalculated if you later change Selling Rate or Cost."
                ],
                [
                  "Liner / Agency Revenue",
                  "What SOA sums on each confirmed Shared row."
                ],
                [
                  "Commission",
                  "This row’s own commission, separate from the header Agency Commission."
                ],
                [
                  "Standard or Customise",
                  "Per-row S/C flag, same idea as Local Port Tariff."
                ]
              ]
            },
            {
              "heading": "Duplicate-row guard",
              "type": "callout",
              "style": "danger",
              "content": "A row is rejected if Charge + Equipment Type + Cargo Type already exists on the same rebate. Currency, Shipment Type and Local/Shared are not part of the check — you cannot enter the same Charge+Equipment+Cargo twice even as Import vs Export."
            },
            {
              "heading": "Editing an existing row",
              "type": "callout",
              "style": "warning",
              "content": "Once a Charge row exists, Charge, Cargo Type, Equipment, Unit, Currency, Selling Rate, Payer, Shipment Type and Standard/Customise become fixed. Only Local/Shared, Full/Empty and the rate/cost/revenue/commission figures stay editable. To change a locked field, remove the row and add a new one."
            },
            {
              "heading": "Listing & search",
              "type": "text",
              "content": "Scoped to your company, newest first, 30 per page. Filters: Agency No (partial), Validity From (on-or-after), Validity To (on-or-before), and Status. The date filters are not an overlap search — they filter the record’s own start/end dates, not whether it covers a chosen reference date."
            },
            {
              "heading": "Overlap protection",
              "type": "callout",
              "style": "danger",
              "content": "Save is blocked if another rebate for the same Company + Port + Terminal + Standard-or-Customer (+ same Customer, including Standard) has a validity window that touches or overlaps — even a shared boundary date counts. Unlike Local Port Tariff, customer-specific rebates cannot overlap. Message: AgencyRebates cannot overlap. Conflicting with: # [Agency No]."
            },
            {
              "heading": "Draft vs Confirmed",
              "type": "rules",
              "items": [
                "New records default to Draft. Confirming means editing, setting Status to Confirmed, and saving.",
                "Saving an edit as Confirmed creates or refreshes the linked Local Port Tariff.",
                "Creating a brand-new record directly as Confirmed does NOT sync — the first save is skipped. The next Edit+Save while still Confirmed then syncs.",
                "A Confirmed rebate locks the linked Local Port Tariff’s Edit and Delete. The rebate itself stays editable and can be flipped back to Draft.",
                "Switching Confirmed back to Draft marks the linked tariff inactive so it stops being offered to Quotations/Invoices.",
                "Flipping Draft→Confirmed again does NOT re-activate that tariff — the inactive flag is never cleared by the sync."
              ]
            },
            {
              "heading": "Confirmed→Draft→Confirmed trap",
              "type": "callout",
              "style": "warning",
              "content": "A rebate can look fully Confirmed on screen while its priced Local Port Tariff is still silently inactive. When SOA or invoices look wrong, check both the rebate status and whether the linked tariff is still active."
            },
            {
              "heading": "Cloning",
              "type": "text",
              "content": "Clone opens a pre-filled form. Country, Port, Terminal, validity, Standard-or-Customer, Customer and header Agency Commission can still be changed; every Charge row is copied as-is. The new record always gets a fresh Agency No, always starts as Draft, and does not sync until later confirmed. Overlap checks still run."
            },
            {
              "heading": "Import & export",
              "type": "rules",
              "items": [
                "Import expects a Tariff No in the same Agency No format plus one row per Charge line.",
                "Import is all-or-nothing: one failing row rolls back the entire upload and returns an Errors workbook.",
                "A successful import immediately syncs every touched header into Local Port Tariff — even if that header is still Draft.",
                "Export downloads every rebate matching the current list filters, one row per Charge line, as Agency THC Rebate.xlsx — the same format Import expects back."
              ]
            },
            {
              "heading": "Deleting",
              "type": "callout",
              "style": "danger",
              "content": "There is no protection before delete — not even for a Confirmed rebate linked to a tariff used by real Quotations, Invoices or SOA figures. Delete marks the linked tariff inactive, deletes every Charge row, then deletes the rebate. Once the rebate is gone, that tariff stays permanently inactive with nothing left to re-activate it."
            },
            {
              "heading": "Sync with Local Port Tariff",
              "type": "rules",
              "items": [
                "The link lives only on the Local Port Tariff (agency_rebate_id). The rebate does not store which tariff it is linked to.",
                "Saving or cloning a Local Port Tariff can create or link a Draft Agency Rebate and rebuild its Charge rows — but only while that rebate is still Draft. A Confirmed rebate is not overwritten from the tariff side.",
                "Confirming a rebate creates a new Local Port Tariff if none matches. If a matching unlinked tariff already exists, that confirm can skip linking.",
                "When updating a linked tariff’s rows, rows already used on an Invoice or an approved Quotation are left untouched and reported by name.",
                "Cargo Type is not part of the tariff-row match, so the two screens are not guaranteed to stay one-to-one after edits in both places. Re-confirm the rebate to force them back in line.",
                "The list Sync button only links records whose Tariff No text equals an Agency No and that are not linked yet — it does not refresh fields or Charge rows."
              ]
            },
            {
              "heading": "How this feeds the SOA",
              "type": "text",
              "content": "The SOA export reaches a rebate through the booking’s Quotation → that Quotation’s Local Port Tariff → that tariff’s linked Agency Rebate. Only a Confirmed rebate contributes. Commission is totaled across every matching row; Liner Revenue and Agency Revenue are totaled only from Shared rows. A Draft rebate is invisible to the SOA even if its synced tariff is already pricing real bookings."
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Agency THC Rebate is where actual take on THC-style charges is recorded and turned into the live Local Port Tariff. The two most common quiet failures are leaving a rebate in Draft (it never reaches Quotations/Invoices or the SOA) and cycling Confirmed→Draft→Confirmed (the priced tariff can stay inactive). When SOA revenue does not match, check that the rebate is Confirmed and that its linked tariff is still active."
            }
          ]
        },
        {
          "id": "storage-detention-power-tariff",
          "title": "Storage-Detention-Power Tariff",
          "icon": "calculator",
          "summary": "Free-time-then-per-day rate card for Storage, Detention and Power — one service+direction per record, consumed by every BL and period calculation screen.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "This is the rate card behind every Storage, Detention and reefer Power charge. Unlike Local Port Tariff, each record here is scoped to exactly one service+direction (for example Import Storage or Export Detention) for one Port/Terminal/Validity window. The rate is not a flat price — it is a free-time-then-per-day scale: for each equipment type, a series of day-range slabs, each with its own rate per day (the first slab is normally 0, the free days)."
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
                  "Tariffs → Storage-Detention-Power Tariff"
                ],
                [
                  "Route (list)",
                  "demurrage.index"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open the Tariff",
                  "desc": "Sidebar → Tariffs → Storage-Detention-Power Tariff.",
                  "icon": "calculator"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Pick Type & Scope",
                  "desc": "Tariff Type decides Storage/Detention/Power plus Import/Export/Empty. Then Port, Terminal(s), Currency, Standard/Customer and validity.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Choose an Action",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Create",
                    "Edit",
                    "Clone",
                    "Sync",
                    "Export",
                    "Delete"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Add Equipment Slabs",
                  "desc": "One row per equipment type (or All 20s / All 40s). Open Periods and add day-ranges with a rate per day.",
                  "icon": "clipboard"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "System Checks Overlap",
                  "tone": "system",
                  "desc": "Browser overlap check for the same Port + Terminal + Type + Category + validity window.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "Rates Ready Downstream",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "BL Storage, BL Detention and Power Calculation can price a document",
                    "Period reports and CRO free-time dates use the same slabs"
                  ]
                }
              ]
            },
            {
              "heading": "Header fields",
              "type": "table",
              "columns": [
                "Field",
                "Meaning"
              ],
              "rows": [
                [
                  "Tariff Type",
                  "Required. One of EDET, ESTO, IDET, ISTO, EEST, IEST, PCEX, PCIM, ECST. This one choice fills Bound, Service+Direction and Full/Empty."
                ],
                [
                  "Port",
                  "Required. Dropdown only offers Egyptian ports — country is hard-coded to Egypt."
                ],
                [
                  "Terminal / Depot",
                  "Required. Multi-select on Create (one independent tariff per terminal). Edit allows a single terminal."
                ],
                [
                  "Validity From / To",
                  "Both required. To must be strictly after From — equal dates are rejected."
                ],
                [
                  "Currency",
                  "Required, must exist in the Currency master."
                ],
                [
                  "Tariff Category",
                  "Standard (company-wide) or Customer (one customer’s bookings only)."
                ],
                [
                  "Customer",
                  "Required only when Category is Customer; cleared automatically for Standard."
                ],
                [
                  "Tariff No",
                  "Auto-generated as [Type name]-[PortCode]-[TerminalCode]-[Customer or Standard]-[From].To.[To]."
                ]
              ]
            },
            {
              "heading": "How Tariff Type fills hidden fields",
              "type": "table",
              "columns": [
                "Tariff Type",
                "Bound",
                "Service + Direction",
                "Status"
              ],
              "rows": [
                [
                  "EDET",
                  "Export",
                  "Export / Detention",
                  "Full"
                ],
                [
                  "ESTO",
                  "Export",
                  "Export / Storage",
                  "Full"
                ],
                [
                  "IDET",
                  "Import",
                  "Import / Detention",
                  "Full"
                ],
                [
                  "ISTO",
                  "Import",
                  "Import / Storage",
                  "Full"
                ],
                [
                  "EEST",
                  "Export",
                  "Export / Storage",
                  "Empty"
                ],
                [
                  "IEST",
                  "Import",
                  "Import / Storage",
                  "Empty"
                ],
                [
                  "PCEX",
                  "Export",
                  "Export / Power",
                  "Full"
                ],
                [
                  "PCIM",
                  "Import",
                  "Import / Power",
                  "Full"
                ],
                [
                  "ECST",
                  "All",
                  "Empty / Storage",
                  "Empty"
                ]
              ]
            },
            {
              "heading": "Equipment-row category",
              "type": "rules",
              "items": [
                "Each equipment row stores Standard, IMO or OOG — independent of the header Standard/Customer field.",
                "Storage types (ESTO, ISTO, EEST, IEST, ECST) allow all three. The same equipment type can appear once per category.",
                "Detention (EDET, IDET) and Power (PCEX, PCIM) are always Standard. IMO/OOG are not offered and the server overwrites any posted category to Standard.",
                "On Detention/Power the same equipment type can be listed only once.",
                "Downstream Detention and Power calculations also ignore IMO/OOG on the booking and always look up the Standard slab."
              ]
            },
            {
              "heading": "Equipment rows and day-range periods",
              "type": "rules",
              "items": [
                "At least one completed equipment row (type + category + at least one period) is required to save.",
                "Each period needs a label, a numeric rate (may be 0; negatives are not blocked) and a whole number of days of 1 or more.",
                "There is no check that periods are in order or that the last period covers unlimited future days. A container that overstays the last period can end up with nothing to charge.",
                "20 (All 20ft) / 40 (All 40ft) expand at save into one real row per matching type. Explicit rows win. OOG expansion skips Reefer and Dry-only types.",
                "Edit/Clone collapses matching rows back into All 20s/All 40s when every type of that size has the same category and scale.",
                "Storage duplicate type+category is blocked in the browser only. Detention/Power duplicates are rejected by the server."
              ]
            },
            {
              "heading": "Overlap protection gaps",
              "type": "callout",
              "style": "warning",
              "content": "The overlap check runs only in the browser before Save — the server does not re-check. It only catches a new range whose start or end falls inside an existing range, so a new range that fully swallows an existing one can slip through. Multi-terminal Create is not guaranteed to check each terminal separately. Overlapping tariffs for the same Port/Terminal/Type/Category can exist in the data."
            },
            {
              "heading": "Edit, clone, delete, sync",
              "type": "rules",
              "items": [
                "Edit is a full replace of rows and periods — existing periods are deleted and re-inserted from the form.",
                "There is no check that blocks editing or deleting a tariff already used by a real calculation or invoice.",
                "Delete removes periods, then equipment rows, then the header. Historical invoices keep the old numeric reference with nothing left to point to.",
                "Clone opens Create pre-filled. Nothing is saved until you press Create. Overlap still runs.",
                "List Sync copies header, rows and periods into your other companies by exact header match only — different rates under the same header are not detected."
              ]
            },
            {
              "heading": "How a tariff header is picked downstream",
              "type": "steps",
              "items": [
                "Match Port + Terminal + Service+Direction (or Tariff Type) + company.",
                "Priority 1: customer-specific header for that booking’s customer.",
                "Priority 2: company-wide Standard header at the same port+terminal.",
                "Valid To is checked against the container’s own end date, not always today. A completed row only needs the tariff still valid on that completion date; an in_completed row needs Valid To >= today.",
                "Validity From is not required to have already started — a future-dated tariff can still be picked if it is the only match."
              ]
            },
            {
              "heading": "How the equipment slab is picked",
              "type": "table",
              "columns": [
                "Screen",
                "Slab rule"
              ],
              "rows": [
                [
                  "BL Storage",
                  "Exact equipment type AND category (IMO, else OOG, else Standard)."
                ],
                [
                  "BL Detention / Power",
                  "Exact equipment type AND category Standard only. Booking IMO/OOG flags are ignored."
                ],
                [
                  "Storage by Period (Full)",
                  "Same as BL Storage."
                ],
                [
                  "Storage by Period (Empty)",
                  "First slab whose equipment name starts with the same two characters (size). Category ignored."
                ],
                [
                  "Detention by Period",
                  "First row for that equipment type with no category filter — on current data that first row is Standard."
                ],
                [
                  "CRO free-time date",
                  "First zero-rate period found across ANY equipment row, not specifically the container’s type."
                ]
              ]
            },
            {
              "heading": "Export",
              "type": "text",
              "content": "Export downloads every matching tariff flattened to one row per period as storageAndDentention.xlsx. Tariff Ref No on the sheet is still built as [Type name]-[PortCode]-Standard Tariff (an old internal id, not the live auto Tariff No). The Rate column header always shows $ regardless of the real currency."
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Every Storage, Detention and Power charge in the system ultimately comes from a day-range rate typed here. Storage can have a different rate for Standard, IMO and OOG on the same equipment type; Detention and Power cannot. The two most common reasons a charge comes out wrong or zero are a Terminal that does not exactly match the booking, or a missing Standard slab (Detention/Power) / matching IMO-OOG-Standard slab (Storage)."
            }
          ]
        }
      ]
    },
    {
      "id": "vessel-voyage",
      "title": "Vessel & Voyage",
      "icon": "anchor",
      "modules": [
        {
          "id": "principle-and-operators",
          "title": "Principle & Vessel Operators",
          "icon": "users",
          "summary": "Company list of shipping lines and the roles they play — Principal, Vessel Operator or other — consumed by Quotations, Bookings, Routes, Vessels and Voyages.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "The list of shipping lines the agency deals with. One record (a line) can play one or more roles chosen in its Type: Principal (the shipping line we act as agent for), Vessel Operator (the line that operates the vessel / service), or other types such as Land Transportation. Almost every operational screen picks a line from this list. Each company has its own list. The sidebar label is spelled Principle — that is the live menu name; the shipping role itself is Principal."
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
                  "Vessel & Voyage → Principle & Vessel Operators"
                ],
                [
                  "Route (list)",
                  "lines.index"
                ],
                [
                  "Feature flags",
                  "vessel_voyage, lines"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Search First",
                  "desc": "Open Principle & Vessel Operators and search by name or code so the line is not already there.",
                  "icon": "search"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Add New",
                  "desc": "Fill Name, Code, Type (one or more roles), Country, and optional City, Address, Phone, Email, Tax ID.",
                  "icon": "clipboard"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · SYSTEM CHECK",
                  "title": "Unique in This Company",
                  "tone": "system",
                  "desc": "Save is blocked if the code or name is already used in this company.",
                  "icon": "activity"
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Copied to Sister Companies",
                  "desc": "The line is copied automatically to companies that share the same company Code.",
                  "icon": "users"
                },
                {
                  "step": 5,
                  "badge": "RESULT",
                  "title": "Offered Downstream",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Principal and/or Vessel Operator appear in Quotations, Bookings, Routes, Vessels and Voyages",
                    "A missing role is why a line exists but does not show in a dropdown"
                  ]
                }
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
                  "Name",
                  "Required. Unique inside the company."
                ],
                [
                  "Code",
                  "Required. Unique inside the company. Service Route Excel files refer to the line by this code."
                ],
                [
                  "Type",
                  "One or more roles (multi-select, required): Vessel Operator, Principal, Land Transportation… The role decides where the line appears."
                ],
                [
                  "Country",
                  "Required."
                ],
                [
                  "City / Address / Phone / Email / Tax ID",
                  "Optional contact details."
                ]
              ]
            },
            {
              "heading": "Create, edit & delete",
              "type": "table",
              "columns": [
                "Rule",
                "Message"
              ],
              "rows": [
                [
                  "Code already used in this company",
                  "This Line Code Already Exists"
                ],
                [
                  "Name already used in this company",
                  "This Line Name Already Exists"
                ],
                [
                  "Name, Code or Country empty",
                  "Standard required message"
                ],
                [
                  "Delete",
                  "Asks for confirmation, then deletes the line"
                ]
              ]
            },
            {
              "heading": "Sync to other companies",
              "type": "rules",
              "items": [
                "On create or edit the line is copied to every sister company (same company Code), including name, code, country, contact details and all roles.",
                "The sister line is matched by an earlier sync link, otherwise by the same Name. If it already exists it is updated instead of duplicated.",
                "If the copy fails, the save still succeeds with a warning: Create/Update saved, but auto-sync to sibling company failed.",
                "Manual Sync to Companies (per row or bulk) opens a pop-up to choose target companies and push on demand."
              ]
            },
            {
              "heading": "How this feeds other modules",
              "type": "table",
              "columns": [
                "Screen",
                "Lines offered"
              ],
              "rows": [
                [
                  "Quotations (Import, Export, Slot)",
                  "Principal: Principal role. Operator: Vessel Operator role."
                ],
                [
                  "Bookings (no quotation)",
                  "Principal and Vessel Operator lists, by role."
                ],
                [
                  "Bookings / B/L",
                  "Show the booking’s Principal and Vessel Operator from this list."
                ],
                [
                  "Service Routes",
                  "Vessel Operator role only."
                ],
                [
                  "Agents",
                  "Principal role."
                ],
                [
                  "Vessels, Voyages, Supplier Prices",
                  "All lines of the company (no role filter)."
                ],
                [
                  "Import Booking Excel",
                  "main_line and vessel_operator columns are matched by line Name."
                ]
              ]
            },
            {
              "heading": "Roles are found by Type number, not name",
              "type": "callout",
              "style": "warning",
              "content": "Always pick roles from the Type list on this screen. A line without the right role will simply not appear in the Principal / Operator dropdowns. Fix the Type here instead of creating a second line with the same name."
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Principal and Vessel Operator drive who a quotation, booking, B/L and voyage belong to. The most common problem is a missing role: a line exists but does not appear in a Quotation or Service Route dropdown because its Type does not include Principal or Vessel Operator."
            }
          ]
        },
        {
          "id": "service-routes",
          "title": "Service Routes",
          "icon": "layers",
          "summary": "Named shipping service with ports in rotation, Vessel Operators and optional North/East/South/West bound — Voyages take their port list from here.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "A Service Route is a named shipping service (for example Red Sea Express) with its ports in rotation, the Vessel Operators that run it, and an optional direction (Service Bound: North / East / South / West). Voyages belong to a service route — choosing the route fills the voyage’s port list and operators. Quotations also pick a Service Route from this list."
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
                  "Vessel & Voyage → Service Routes"
                ],
                [
                  "Route (list)",
                  "routes.index"
                ],
                [
                  "Feature flags",
                  "vessel_voyage, routes"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Operators Ready First",
                  "desc": "Vessel Operators must already exist in Principle & Vessel Operators with the Vessel Operator role.",
                  "icon": "users"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Add New Route",
                  "desc": "Fill Name, Code, Vessel Operator(s), Ports, and optionally Service Bound.",
                  "icon": "clipboard"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Create or Bulk",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Save one route",
                    "Template + Upload",
                    "Export → edit → Overwrite"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4 · SYSTEM CHECK",
                  "title": "Name/Code + Bound Unique",
                  "tone": "system",
                  "desc": "The same Name or Code may exist twice only if the Service Bound is different (RSX North and RSX South).",
                  "icon": "activity"
                },
                {
                  "step": 5,
                  "badge": "RESULT",
                  "title": "Pick It on Voyages",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Voyages load this route’s ports and operators",
                    "Form save copies the route to sister companies"
                  ]
                }
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
                  "Name",
                  "Required."
                ],
                [
                  "Code",
                  "Required. Always saved in lower case."
                ],
                [
                  "Vessel Operator",
                  "One or more lines with the Vessel Operator role (required)."
                ],
                [
                  "Ports",
                  "One or more ports of the rotation (required). Shown by port code in the list."
                ],
                [
                  "Service Bound",
                  "Optional: North, East, South or West."
                ]
              ]
            },
            {
              "heading": "Create, edit & delete",
              "type": "table",
              "columns": [
                "Rule",
                "Message"
              ],
              "rows": [
                [
                  "Same Name + same Service Bound",
                  "This name with the same service bound already exists."
                ],
                [
                  "Same Code + same Service Bound",
                  "This code with the same service bound already exists."
                ],
                [
                  "Delete while any voyage uses the route",
                  "Can not Delete This Route Because It Has Related Voyage Records"
                ]
              ]
            },
            {
              "heading": "Bulk upload & overwrite",
              "type": "rules",
              "items": [
                "Upload template columns: name, code, port codes, line codes. Port and line codes are comma-separated.",
                "Rows without name or code are skipped. A Name that already exists is skipped and listed.",
                "Unknown port / line codes are silently ignored. Uploaded routes have no Service Bound and are not copied to sister companies.",
                "Overwrite uses the Export file and matches by the id column. Filled port_codes / line_codes replace the current lists; empty cells keep them.",
                "Overwrite changes are not copied to sister companies."
              ]
            },
            {
              "heading": "Sister-company sync",
              "type": "callout",
              "style": "warning",
              "content": "Form create/edit copies the route, ports and operators to every sister company. Every Vessel Operator must already exist there (same name and code). If one is missing that company is skipped: saved, but auto-sync failed because Line (route operator) X does not exist. Sync the line first, then save the route again."
            },
            {
              "heading": "How this feeds other modules",
              "type": "rules",
              "items": [
                "When a Service Route is chosen on a voyage, the system loads the route’s ports and its operators. The Voyage list can be filtered by Service Route.",
                "The quotation’s Service Route is picked from this company’s routes. On a new quotation it is required only for MLH companies; when editing a quotation it is always required."
              ]
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Voyages take their port rotation from the Service Route, so a wrong or missing port here means the voyage is set up with the wrong ports. The most common sync problem is an operator that exists only in one company — the route then silently stays out of the sister company until that operator line is synced first."
            }
          ]
        },
        {
          "id": "vessels",
          "title": "Vessel List",
          "icon": "anchor",
          "summary": "Company list of ships — name, code, type, operator and technical details. Every voyage is vessel + voyage number, and the vessel’s Operator becomes the voyage’s line.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "The list of ships the company works with: name, code, type, operator and technical details (IMO, call sign, flag, tonnage, TEU capacity). A vessel is the base of every Voyage: a voyage is always vessel + voyage number. The vessel’s Operator is copied to the voyage as its line. Bookings, Movements and Manifest imports also pick vessels from this list. Each company has its own list."
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
                  "Vessel & Voyage → Vessel List"
                ],
                [
                  "Route (list)",
                  "vessels.index"
                ],
                [
                  "Feature flags",
                  "vessel_voyage, vessels"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Operator Ready",
                  "desc": "The operator must already exist in Principle & Vessel Operators.",
                  "icon": "users"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Type Name, then Scan",
                  "desc": "Scan fills empty technical fields from the internet. It never overwrites what the user typed.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3",
                  "title": "Fill Code, Type, Operator",
                  "desc": "Check Call Sign, IMO and the rest, then Save.",
                  "icon": "clipboard"
                },
                {
                  "step": 4,
                  "badge": "STEP 4 · SYSTEM CHECK",
                  "title": "Unique in This Company",
                  "tone": "system",
                  "desc": "Name, Code, and a filled Call Sign or IMO Number must not already be used.",
                  "icon": "activity"
                },
                {
                  "step": 5,
                  "badge": "RESULT",
                  "title": "Create Voyages",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "The vessel is copied to sister companies",
                    "New voyages of this vessel inherit its Operator as the line"
                  ]
                }
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
                  "Name / Code",
                  "Both required and unique inside the company."
                ],
                [
                  "Vessel Type",
                  "Required on the form (e.g. Container, RoRo)."
                ],
                [
                  "Vessel Operator",
                  "Required. Any line from Principle & Vessel Operators. Becomes the line of every voyage of this vessel."
                ],
                [
                  "Call Sign / IMO Number",
                  "Optional. If filled, unique inside the company."
                ],
                [
                  "Year Built / MMSI / Flag / G.W / DWT / Total TEU",
                  "Optional technical details."
                ],
                [
                  "Notes / Attach",
                  "Optional free text and certificate file, shown as a link in the list."
                ]
              ]
            },
            {
              "heading": "Scan button",
              "type": "callout",
              "style": "info",
              "content": "Next to Code. Searches the vessel by the Name typed and fills Call Sign, IMO, Year Built, MMSI, Flag, G.W, DWT and Total TEU — only fields that are still empty. Messages: Vessel not found. / Vessel API is not configured. / Flag could not be matched to a country (other fields are still filled)."
            },
            {
              "heading": "Create, edit & delete",
              "type": "table",
              "columns": [
                "Rule",
                "Message"
              ],
              "rows": [
                [
                  "Name already used",
                  "This Vessel Name Already Exists"
                ],
                [
                  "Code already used",
                  "This Vessel Code Already Exists"
                ],
                [
                  "Call Sign already used",
                  "This Vessel Call Sign Already Exists"
                ],
                [
                  "IMO Number already used",
                  "This Vessel Imo Number Already Exists"
                ],
                [
                  "Delete while any voyage exists",
                  "Can not Delete This Vessel Because It Has Related Voyages Records"
                ]
              ]
            },
            {
              "heading": "Bulk upload & sync",
              "type": "rules",
              "items": [
                "Upload headers: name, code, vessel_type, operator, flag. Name and Code are required.",
                "Vessel type and operator are matched by name. Flag is matched by country name and left empty if not found.",
                "Good rows are imported and bad rows are listed. Uploaded vessels are not copied to sister companies, and only name, code, type, operator and flag are filled.",
                "Form create/edit copies the vessel to every sister company, matched by sync link or the same Code.",
                "The Operator must already exist in the sister company. If not, that company is skipped until the line is synced first."
              ]
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Every voyage, booking and movement points to a vessel, and the vessel’s Operator decides the voyage’s line. A wrong operator here spreads to all new voyages of the vessel. Use Scan to avoid typing mistakes in IMO / call sign, and sync the operator line before the vessel so sister companies receive it too."
            }
          ]
        },
        {
          "id": "voyages",
          "title": "Voyage List",
          "icon": "anchor",
          "summary": "One trip of a vessel — vessel + voyage number + leg on a Service Route, with port calls and ETA/ETD. Bookings, B/Ls, EDI, invoices and CRO free time all hang off it.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "A Voyage is one trip of a vessel: vessel + voyage number + leg (Import, Export, transshipment…), on a Service Route, with its port calls (port, terminal, road / wharf number, ETA, ETD). It is the backbone of operations: bookings, B/Ls, manifests, EDI, movements, invoices and printed letters are all linked to a voyage, and the voyage’s port dates are printed on documents and used for storage free-time on the CRO letter."
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
                  "Vessel & Voyage → Voyage List"
                ],
                [
                  "Route (list)",
                  "voyages.index"
                ],
                [
                  "Feature flags",
                  "vessel_voyage, voyage_list"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Vessel and Route Ready",
                  "desc": "The Vessel and the Service Route must already exist.",
                  "icon": "anchor"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Add New Voyage",
                  "desc": "Pick Vessel, Voyage No, Service Route and Leg. Choosing the route loads its ports.",
                  "icon": "clipboard"
                },
                {
                  "step": 3,
                  "badge": "STEP 3",
                  "title": "Add Port Calls",
                  "desc": "One row per port: Terminal, Road / Wharf No, ETA and ETD.",
                  "icon": "layers"
                },
                {
                  "step": 4,
                  "badge": "STEP 4 · SYSTEM CHECK",
                  "title": "Dates, Unique Port, No Duplicate",
                  "tone": "system",
                  "desc": "ETD must be on or after ETA, a port can appear only once, and vessel + voyage no + leg + route must be unique in this company.",
                  "icon": "activity"
                },
                {
                  "step": 5,
                  "badge": "RESULT",
                  "title": "Shared Serial + Space Confirmation",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Copied to sister companies with a shared Serial",
                    "Export voyages need Space Confirmation ticked before B/L creation"
                  ]
                }
              ]
            },
            {
              "heading": "Header fields",
              "type": "table",
              "columns": [
                "Field",
                "Meaning"
              ],
              "rows": [
                [
                  "Vessel / Voyage No",
                  "Both required. Vessel from Vessel List."
                ],
                [
                  "Service Route",
                  "Required on the form. Filters the ports offered for the port calls."
                ],
                [
                  "Leg",
                  "Required: All, Import, Export, Load Transshipment, Discharge Transshipment."
                ],
                [
                  "Vessel Operator",
                  "Not typed on create. Copied from the vessel’s Operator, and again only if the vessel is changed later."
                ],
                [
                  "Principal",
                  "Optional. Any line of the company."
                ],
                [
                  "Space Confirmation",
                  "Yes/No. Import voyages are always Yes. Export starts Yes on create; changing Leg to a non-Import on edit sets it to No until it is ticked again in the list."
                ],
                [
                  "Serial",
                  "Never typed. Shared code of the same voyage across sister companies."
                ],
                [
                  "Actual times",
                  "Edit form only: Arrived, Berthed, Discharge / Loading commenced and completed, Sailed."
                ]
              ]
            },
            {
              "heading": "Port calls",
              "type": "table",
              "columns": [
                "Field",
                "Meaning"
              ],
              "rows": [
                [
                  "Port",
                  "From the route’s ports. A port can appear only once per voyage."
                ],
                [
                  "Terminal",
                  "Terminals of that port."
                ],
                [
                  "Road No / Wharf No",
                  "Optional."
                ],
                [
                  "ETA / ETD",
                  "Required dates. ETD must be on or after ETA."
                ]
              ]
            },
            {
              "heading": "Listing notes",
              "type": "rules",
              "items": [
                "Latest ETA first, 30 per page. Search includes Port From / Port To, Vessel, Voyage No, Service Route, Leg.",
                "Port From only shows voyages that call at that port (that row only). Port From + Port To shows voyages that call at both, From before To.",
                "Total BL is clickable: Import leg counts bookings (cancelled excluded); other legs count distinct B/Ls.",
                "Space Confirmation checkbox saves immediately. Read-only for Import.",
                "Export can be the Voyages list or a TEU Summary (20'/40'/TEU per voyage from Load and Discharge movements)."
              ]
            },
            {
              "heading": "Create, edit & delete",
              "type": "table",
              "columns": [
                "Rule",
                "Message"
              ],
              "rows": [
                [
                  "ETD before ETA",
                  "Voyage ETD Must Be Bigger Than or Equal ETA"
                ],
                [
                  "Same port twice",
                  "Voyage Port Must be unique"
                ],
                [
                  "Same vessel + voyage no + leg + route",
                  "This Voyage Already Exists"
                ],
                [
                  "Delete while any booking uses it",
                  "Can not Delete This voyage Because It Has Related Booking Records"
                ]
              ]
            },
            {
              "heading": "Serial & sister-company sync",
              "type": "rules",
              "items": [
                "On save the system looks in this company and its sisters for another voyage with the same Voyage No and a vessel with the same name. If found, it takes that Serial; otherwise the serial is voyage-id plus vessel-id padded to 3 digits (e.g. 1520-007).",
                "Reports that let the user pick voyages (Export Booking, DO Prints, Seals List, Booking Transhipment) use the serial to include matching sister voyages.",
                "Form create/edit (and uploading NEW voyages) copies the voyage, port calls and actual times to every sister company.",
                "Service Route, Vessel and line must already exist there. If not, that company is skipped with a warning. Sync those records first.",
                "Overwrite of existing voyages is not synced to sister companies."
              ]
            },
            {
              "heading": "Bulk upload & overwrite",
              "type": "rules",
              "items": [
                "Upload is one row per port call: vessel_code, voyage_no, port, terminal, eta, etd, road_no, wharf_no, leg, service_route.",
                "Vessel Code, Voyage No, Port and Leg are required. Rows with the same vessel + voyage no + route + leg go into one voyage.",
                "New uploaded voyages get Space Confirmation = Yes and line = vessel operator, and are synced to sister companies.",
                "Overwrite uses the same columns plus voyage_id, job_no, principal. It replaces the port call for that port. Result: Voyages overwritten successfully."
              ]
            },
            {
              "heading": "How this feeds other modules",
              "type": "rules",
              "items": [
                "A booking has a first voyage and, for transshipment, a second voyage. Import uses the discharge (or transshipment) Egypt port call; Export uses the load port.",
                "Confirmed bookings can create a B/L and print the Shipping Order / Booking Confirmation only when Space Confirmation is Yes. Ready For BL uses the same rule.",
                "B/L, manifests, CRO, Gate In, VGM, DO and arrival notice print vessel, voyage no and the port call’s ETA / ETD. CRO storage free-time expiry is calculated from the Egypt port call’s ETA.",
                "Invoices and quotations can be filtered by voyage ETA. CUSCAR / manifest files and movements are linked to the voyage and its port calls."
              ]
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "A wrong ETA or terminal on a voyage is printed on every B/L, CRO and manifest of that voyage and shifts the storage free time. Export bookings stay blocked from B/L creation until Space Confirmation is ticked — the most common reason a user cannot create a B/L. Create the vessel, route and lines in all companies before the voyage, because sister companies share voyages through the Serial."
            }
          ]
        },
        {
          "id": "voyage-tde",
          "title": "Voyage TDR List",
          "icon": "file-text",
          "summary": "Time Departure Report for one Egypt port call — arrival through departure times exported to Excel for the line. Other modules do not read these times.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "The TDR (Time Departure Report / statement of facts) records the actual timeline of a vessel call at an Egypt port: arrival, anchor, pilots, berthing, discharge and loading, and departure. There is one TDR per voyage. It is a reporting screen: the main output is the TDR Excel export (company logo + voyage details + all times), which is sent to the line / principal. Other modules do not read these times."
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
                  "Vessel & Voyage → Voyage TDR List"
                ],
                [
                  "Route (list)",
                  "voyageTDR.index"
                ],
                [
                  "Feature flags",
                  "vessel_voyage, voyageTDR_list"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Voyage Must Call Egypt",
                  "desc": "Only voyages with at least one Egypt port call can have a TDR.",
                  "icon": "anchor"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Add New TDR",
                  "desc": "Pick the voyage (Vessel / Voyage No (Leg)) and fill the times that happened. All times are optional.",
                  "icon": "clipboard"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · SYSTEM CHECK",
                  "title": "One TDR per Voyage",
                  "tone": "system",
                  "desc": "A second TDR for the same voyage is rejected. The voyage cannot be changed after saving.",
                  "icon": "activity"
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Update as the Call Progresses",
                  "desc": "Edit the times, then search the voyage and Export the TDR Excel.",
                  "icon": "file-text"
                },
                {
                  "step": 5,
                  "badge": "RESULT",
                  "title": "Official Timeline for the Line",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "voyageTdr.xlsx with logo, Egypt port/terminal, vessel, voyage, times",
                    "Voyage actual times on the Voyage edit form are a separate record"
                  ]
                }
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
                  "Voyage",
                  "Required. Only voyages with at least one Egypt port call. Cannot be changed after saving. The voyage’s Leg is saved with the TDR."
                ],
                [
                  "Times",
                  "All optional date+time: Arrived On, Dropped Anchor Outside, Anchor Up, Sea Pilot On Board, Vessel Entered Inner Road, FLA, All Fast, Berthed On, Discharge / Loading / Operation commenced and completed, Harbour Pilot On Board, Un-Berth, Pilot Off, Sailed On."
                ]
              ]
            },
            {
              "heading": "Separate from Voyage actual times",
              "type": "callout",
              "style": "warning",
              "content": "These times are separate from the actual times on the Voyage edit form (Arrived, Berthed, Sailed…). Updating one does not update the other."
            },
            {
              "heading": "Export & upload",
              "type": "rules",
              "items": [
                "Export requires a Vessel / Voyage selected in search first: Please select Vessel / Voyage No before export.",
                "The file is built from the company template: logo, Egypt port and terminal, vessel, voyage no, job number, shipping line (user’s company name), vessel operator, then each time as dd/mm/yyyy hh:mm.",
                "Template download is one voyage per file with values in column B. Voyage is matched by Voyage No and vessel name (any company).",
                "Upload is blocked if a TDR already exists for that vessel / voyage, or if Voyage No is missing in cell B11.",
                "Delete asks for confirmation and removes the TDR only. The voyage is not touched."
              ]
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "The TDR export is the official timeline the principal receives for the port call; wrong or missing times are sent as-is. Always check the vessel and voyage label before creating or exporting, so the TDR is attached to the right voyage."
            }
          ]
        }
      ]
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
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Equipment Types",
                  "desc": "Sidebar → Container Control → Equipment Types.",
                  "icon": "box"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Search Types",
                  "desc": "Filter by code/size such as 20 DV, 40 HC, or 20 RF.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Choose an Action",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Create Type",
                    "Edit Type",
                    "Delete"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Enter Type Details",
                  "desc": "Define type/size category used by physical containers and tariffs.",
                  "icon": "clipboard"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "System Applies Locks",
                  "tone": "system",
                  "desc": "Price Lock and usage rules protect types already referenced.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "Type Feeds Operations",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Container List and Radar group by this type",
                    "Tariffs and bookings reuse the catalogue"
                  ]
                }
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
                "A new record is automatically assigned to the creating user’s company."
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
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Container List",
                  "desc": "Sidebar → Container Control → Container List (containers flag).",
                  "icon": "box"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Search Containers",
                  "desc": "Filter by code, type, operator, stock badge, or depot.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Choose an Action",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Create",
                    "Edit",
                    "Bulk Import",
                    "Export",
                    "Delete"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Enter / Upload Details",
                  "desc": "Set container number, type, operator; or import via template.",
                  "icon": "clipboard"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "System Derives Stock",
                  "tone": "system",
                  "desc": "Live stock badges come from movements; codes stay globally unique.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "Container in Fleet Registry",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "In Stock / Out / Damaged badges update live",
                    "Import/export supports mass maintenance"
                  ]
                }
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
              "type": "filters",
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
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Equipment Status",
                  "desc": "Sidebar → Container Control → Equipment Status (Radar).",
                  "icon": "activity"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Scan Type Buckets",
                  "desc": "Review live counts per Equipment Type across stock states.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Read the Radar",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Check In Stock",
                    "Check Out / On Hire",
                    "Check Damaged / Other"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Interpret Priority Buckets",
                  "desc": "Use the bucket priority order to understand the dominant state.",
                  "icon": "clipboard"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "System Counts Live",
                  "tone": "system",
                  "desc": "Read-only dashboard aggregates Container List rows with caching.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "Fleet Snapshot Ready",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Ops see stock health per type at a glance",
                    "No edit path — numbers always reflect live data"
                  ]
                }
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
              "content": "The master list of valid Operator Codes — short codes identifying which shipping line currently owns/operates a container. Unlike most master tables, this list is global — one shared list for every company on the platform."
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
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Operator Codes",
                  "desc": "Sidebar → Container Control → Operator Codes.",
                  "icon": "hash"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Search Codes",
                  "desc": "Locate a shipping-line operator code in the global list.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Choose an Action",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Create Code",
                    "Edit Code",
                    "Delete",
                    "Refresh Sync"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Enter Code & Save",
                  "desc": "Add/update the short operator identity used on containers.",
                  "icon": "clipboard"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "System Soft-Protects",
                  "tone": "system",
                  "desc": "Delete is blocked when codes are in use; Refresh syncs shared list.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "Codes Validate Elsewhere",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Container operator fields accept only valid codes",
                    "One global list shared by every company"
                  ]
                }
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
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Damage List",
                  "desc": "Sidebar → Container Control → Damage List.",
                  "icon": "alert-triangle"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Search Catalogue",
                  "desc": "Filter General or depot-specific damage price rows.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Choose an Action",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Add Damage",
                    "Edit",
                    "Delete",
                    "Bulk Import"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Enter Price Details",
                  "desc": "Set damage description, depot scope, and chargeable amount.",
                  "icon": "clipboard"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "System Separates Concepts",
                  "tone": "system",
                  "desc": "This is a price catalogue — not the live Damaged stock badge.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "Repair Pricing Ready",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Repairs/quotations can pick priced damage items",
                    "Import keeps depot catalogues consistent"
                  ]
                }
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
        },
        {
          "id": "movement-activities",
          "title": "Movement Activity Codes",
          "icon": "activity",
          "summary": "Per-company rulebook of which movement activities are used, what status each implies, and which activity is allowed next — read by Movement Control, Bulk Moves and Excel Import.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "This screen defines, per company, which movement activities (On Hire, Gate In Full, Discharge Empty, and the rest) the company actually uses, what container status each one implies, and — most importantly — which activity is allowed to come next after each one. This is the rulebook that Movement Control (Single Movement, Bulk Movements, and Excel Import) reads to decide which next moves to offer for a container, and whether a movement being imported or entered is a valid next step given the container’s last movement. Without a correctly configured sequence here, Bulk Moves would offer nonsensical next-activity options and Excel Import would either reject valid rows or silently accept an impossible sequence."
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
                  "Container Control → Mv Activity Codes"
                ],
                [
                  "Route (list)",
                  "container-movement.index"
                ],
                [
                  "Feature flag",
                  "movement_codes — only visible when enabled for the company"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Mv Activity Codes",
                  "desc": "Sidebar → Container Control → Mv Activity Codes (movement_codes flag).",
                  "icon": "activity"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Activate a Global Activity",
                  "desc": "Pick one system activity (shown as Name - CODE, e.g. On Hire - ONHI) and give it this company’s Line Code and Container Status.",
                  "icon": "clipboard"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Wire Next Possible Activities",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Edit multi-select — add and remove",
                    "List eye icon — add only"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4 · SYSTEM CHECK",
                  "title": "Movement Control Reads This",
                  "tone": "system",
                  "desc": "Bulk Moves offer only the next activities wired here. Excel Import rejects a row that is not in that list, and also checks it against the next chronological movement already on file.",
                  "icon": "activity"
                },
                {
                  "step": 5,
                  "badge": "STEP 5",
                  "title": "Export Column Order (optional)",
                  "desc": "Master Data → Excel Templates → Reorder on a movements template. This only changes which movement columns appear on that export; it does not change sequence rules.",
                  "icon": "file-text"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "Company Workflow Encoded",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Each company can use different Line Codes and different next-activity rules for the same global activity",
                    "An activity with no row here means no restriction — every global activity is offered as a starting move"
                  ]
                }
              ]
            },
            {
              "heading": "Two layers — global catalogue vs this screen",
              "type": "table",
              "columns": [
                "Layer",
                "What it is"
              ],
              "rows": [
                [
                  "Movement Activities (global)",
                  "Shared catalogue of every possible activity code in the system (ONHI, GOMT, GIFU, LOFU, DIFU, GOFU, GIMT, LOMT, DIMT, LOTR, DITR, RCVE, RCVF, TRNE, TRAS, SWAP, and the rest). Same list for every company. There is no screen to add or edit these — they are fixed system constants. A brand-new activity type has to be requested from the product team; a company admin cannot create one here."
                ],
                [
                  "Movement Activity Codes (this screen)",
                  "A per-company row that activates one global activity for that company and attaches Line Code, Container Status, export Order, and allowed next activities. Two companies can configure completely different Line Codes and next-activity rules for the same underlying Activity."
                ]
              ]
            },
            {
              "heading": "Fields per row",
              "type": "table",
              "columns": [
                "Field",
                "Meaning"
              ],
              "rows": [
                [
                  "Movement Activity",
                  "Which global activity this row is activating. Dropdown of all Movement Activities, shown as Name - CODE (e.g. On Hire - ONHI). Required."
                ],
                [
                  "Line Code",
                  "Free-text code the company associates with this activity. Required."
                ],
                [
                  "Container Status",
                  "Which status (Full / Empty) this activity implies. Required on create; optional on edit."
                ],
                [
                  "Next Possible Activities",
                  "The other activities allowed next for a container whose latest movement is this one. Configured from the Next Activities modal on the list, or the multi-select on Edit."
                ],
                [
                  "Order",
                  "Numeric position used only for Excel export column ordering. Not shown on Create/Edit — managed from Excel Templates. A row with no Order is treated as disabled for export only; it still works normally in Movement Control and sequence validation."
                ]
              ]
            },
            {
              "heading": "Listing & search",
              "type": "text",
              "content": "Paginated (30 per page) table of the company’s own rows, ordered by ID. Columns: Activity Name, Activity Code, Line Code, Container Status, plus Actions (view Next Activities / Edit / Sync to Companies / Delete). Combined header filters: Activity Name, Activity Code, Line Code."
            },
            {
              "heading": "Creating & editing",
              "type": "rules",
              "items": [
                "Movement Activity and Line Code are required on both Create and Edit. Container Status is required on Create; Edit may leave it as-is.",
                "The same Movement Activity cannot be activated twice for the same company. Reusing one already configured is rejected with: This Movement Name Already Exists. On Edit, the check excludes the record being edited.",
                "On the Edit screen, Next Possible Activities is a multi-select of every other activity already configured for this company. Whatever is selected is fully synced (added and removed) on Save.",
                "From the list, the eye icon opens a Next Activities modal that only ADDS. Removing requires the Edit multi-select. Adding activities that are already present is rejected with: These activities are already added.",
                "Success: Container Movement Created / Updated, then back to the list."
              ]
            },
            {
              "heading": "Deleting a row",
              "type": "callout",
              "style": "warning",
              "content": "The server does not block delete if the activity is already in use. The UI does: if any Movement records already exist under this activity for this company, Delete shows a hard block instead of a confirmation — “This Movement Activity cannot be deleted because it already has movements assigned to it.” If none exist yet, a normal Are you sure? confirmation is shown."
            },
            {
              "heading": "How this drives Movement Control",
              "type": "rules",
              "items": [
                "Every container’s last movement points at one row here (matched by company + activity).",
                "Bulk Movements / Assign Operator: the system looks up the last movement’s activity, finds this company’s row, and reads Next Possible Activities. That list is offered as the next move (with a few extra hard-coded exceptions for discharge / gate-out / transhipment). If the container has no prior movement, or the last activity has no row for this company, every global Movement Activity is offered — an unconfigured activity means no restriction.",
                "Excel Import: each imported row is checked against the previous movement’s Next Possible Activities (rejecting with Invalid movement sequence…) and also against the next chronological movement already on file, so a row cannot be inserted into the middle of existing history out of sequence. Example: Date conflict for [container]: you are importing [code] on [date], but this container already has [code] recorded at [date]. [code] cannot come before [code] in the movement sequence.",
                "A container loaded under one company and later discharged under a sibling company skips the sequence check for that one load-to-discharge transition (the box physically sailed there). A load-to-discharge within the same company is still fully validated.",
                "Some activities are exempt from having Port / Terminal / Voyage / Vessel / Booking enforced during Import. That exemption list is hard-coded by activity code in the import logic — not configured on this screen."
              ]
            },
            {
              "heading": "Excel export column order is a separate switch",
              "type": "callout",
              "style": "info",
              "content": "From Master Data → Excel Templates, a template with a movements column has a Reorder button. That drag-and-drop list is this same company list; toggling a row off only hides that movement column on that export. It has no effect on Bulk Moves or Import sequence logic. A row toggled off here still behaves normally everywhere else."
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "This is where the shared catalogue of movement activities becomes a company’s own day-to-day workflow: which activities it uses, what it calls them (Line Code), and in what order they are allowed to happen. Get Next Possible Activities wrong and the symptoms show up two places a junior teammate might not expect: Bulk Moves offering the wrong (or no) next-step options, and Excel Import rejecting movement rows that look perfectly correct as invalid-sequence errors."
            }
          ]
        },
        {
          "id": "movement-control",
          "title": "Movement Control",
          "icon": "truck",
          "summary": "Dated operational history per container — gate-in/out, load, discharge, on/off hire, repair — that drives stock, booking assignment, guarantees and draft BL dates.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "Movement Control records the dated operational history of every container: gate-in/out, loading, discharge, on/off hire, repair and other configured activities. Each movement says what happened, when and where it happened, and which booking/vessel/voyage it belongs to. This is not just a tracking log — the latest movement controls the container's stock position and condition, valid next movements, booking-container assignment, trucker guarantee balance and, for a Load Full movement, the draft BL shipment date."
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
                  "Container Control → Movement Control"
                ],
                [
                  "Route (list)",
                  "movements.index"
                ],
                [
                  "Feature flag",
                  "movement_control"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Movement Control",
                  "desc": "Sidebar → Container Control → Movement Control (movement_control flag).",
                  "icon": "truck"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Filter & Review Latest Move",
                  "desc": "Filter containers and review each box's latest non-deleted movement.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Choose an Action",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Add Movement",
                    "Bulk Submit",
                    "Excel Import",
                    "Correct / Delete"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Submit the Movement",
                  "desc": "Pick container, valid next activity, date, location, terminal and booking.",
                  "icon": "clipboard"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "System Validates Sequence",
                  "tone": "system",
                  "desc": "Checks next-activity rules, ETA/ETD window, and booking capacity.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "History Recorded & Propagated",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Stock, operator code and guarantee balances recalculate",
                    "Export All / Last / Summary Movement for reporting"
                  ]
                }
              ]
            },
            {
              "heading": "Fields stored per movement",
              "type": "table",
              "columns": [
                "Field",
                "Meaning"
              ],
              "rows": [
                [
                  "Company",
                  "The line/company that recorded the movement — matters when sister lines handle the same global container."
                ],
                [
                  "Container Number",
                  "The physical container being moved. Required. Points to the one global Container List record for that code."
                ],
                [
                  "Movement Type",
                  "The global activity performed (e.g. ONHI, GIFU, LOFU, DCHF, SNTR, WTOR). Required. Choices come from the company's configured Next Possible Activities."
                ],
                [
                  "Line Code",
                  "The company's own code for that activity, displayed beside the global movement code."
                ],
                [
                  "Movement Date",
                  "Event date and time. Required and cannot be in the future."
                ],
                [
                  "Container Status",
                  "Full or Empty. Not chosen directly — copied from the company's Movement Activity Code configuration."
                ],
                [
                  "Activity Location",
                  "Port where the event occurred. Normally required."
                ],
                [
                  "Terminal",
                  "Depot/terminal at the activity location. Normally required."
                ],
                [
                  "Booking No",
                  "The linked booking. The database stores the booking record ID; the screen displays the booking reference number."
                ],
                [
                  "Vessel / Voyage",
                  "Vessel and voyage connected to the movement."
                ],
                [
                  "POL / POD",
                  "Displayed from the linked booking, not typed directly on the normal movement form."
                ],
                [
                  "Operator Code",
                  "Copied onto the movement from the container. ON HIRE restores the last operator that actually held the box and also updates Container List."
                ],
                [
                  "Container Condition",
                  "MLH companies can mark the movement as damaged. The displayed AV/DM flag is DM for SNTR, otherwise the Repair module's current flag wins, then this checkbox is the fallback."
                ],
                [
                  "Remarks",
                  "Optional free text. Shown as a list column for the Sobek agency and included in exports."
                ],
                [
                  "Created By",
                  "User who recorded the movement."
                ]
              ]
            },
            {
              "heading": "What the list shows",
              "type": "text",
              "content": "The main grid shows ONE row per container: its latest non-deleted movement, decided by full movement date/time and then movement ID when two records share the same time. It is ordered newest first and paginated 30 rows at a time. The row shows Container Number and Operator Code, Type/Size, global Movement Code, company Line Code, Movement Date, Full/Empty status, Booking, Vessel/Voyage, Activity Location, POL, POD, Terminal/Depot, Trucker and Created By. WTOR rows are greyed for easy recognition. Opening a row's details shows that container's FULL movement history, also newest first — editing and deleting individual history records happens from this history view, not directly in the main latest-row grid."
            },
            {
              "heading": "Search filters",
              "type": "filters",
              "items": [
                "Container Number (one or many, including pasted codes)",
                "Type/Size",
                "Activity Location",
                "Terminal",
                "Vessel/Voyage",
                "Shipment: Import / Export (after selecting a voyage)",
                "Movement Activity",
                "Booking Number",
                "From Date / To Date",
                "Created By",
                "Trucker",
                "Operator Code (MLH companies)"
              ]
            },
            {
              "heading": "Movement filter vs. \"Last Movement\" switch",
              "type": "callout",
              "style": "info",
              "content": "Without the switch, the movement filter helps find relevant records before the latest row per container is selected. With \"Last Movement\" enabled, the screen shows only containers whose CURRENT latest movement matches the selected activity — use it when the question is \"Which containers are currently at WTOR?\" rather than \"Which containers have matching movement history?\""
            },
            {
              "heading": "Default company scope & Cross-line",
              "type": "callout",
              "style": "info",
              "content": "The list normally shows movements recorded by the logged-in user's company. For MLH/sister-line operation, Cross widens results to companies sharing the same company-code group. Cross-line scope also activates when filtering by Operator Code, and a Booking Number search can widen to sister companies where company codes are enabled. A Container Number filter alone does NOT widen the movement-company scope — the row still belongs to whichever company recorded that movement."
            },
            {
              "heading": "Adding a single movement — normal flow",
              "type": "steps",
              "items": [
                "Select the container.",
                "The screen loads valid next movement activities from that container's previous movement and the company's Movement Activity Codes setup.",
                "Select the activity and movement date.",
                "Select Activity Location and Terminal.",
                "Select Booking, Vessel and Voyage when the activity requires shipment references.",
                "Add optional Remarks / damaged condition and save."
              ]
            },
            {
              "heading": "Single movement rules",
              "type": "rules",
              "items": [
                "Required by default: Container, Movement Type, Movement Date, Activity Location, Terminal, Booking, Vessel and Voyage.",
                "Booking, Vessel and Voyage are optional for: Receive Empty, Transfer Full, Receive Full, On Hire, Off Hire, Transfer Empty, Load Empty and Discharge Empty.",
                "The movement date cannot be later than today.",
                "Manually creating Load Full or Discharge Full requires the date to fall between the selected voyage-port ETA and ETD; no matching schedule rejects with \"No ETA and ETD found for the selected voyage and port.\"",
                "Editing recalculates Full/Empty status from the selected activity. If an assigning activity, container or booking changes, the old booking assignment is reversed and the new valid assignment is made."
              ]
            },
            {
              "heading": "Known inconsistency — ETA/ETD check on Edit",
              "type": "callout",
              "style": "warning",
              "content": "The ETA/ETD date-window check runs on CREATE but is currently disabled on the EDIT path. Editing can therefore save a load/discharge date that the create form would reject."
            },
            {
              "heading": "Movement-sequence rules",
              "type": "rules",
              "items": [
                "Single movement: after the container is selected, the form offers its valid next activities — the server save mainly relies on that controlled dropdown.",
                "Bulk movements: every selected row is checked against the container's previous and next history. If any row is invalid, the whole batch is rejected and no movement is created.",
                "Excel import/overwrite: the activity is checked against the movement immediately before AND immediately after it, preventing a dated event from breaking either side of history.",
                "The same activity twice in a row is normally rejected — import raises \"Invalid movement sequence ... Expected: [allowed codes]\".",
                "If an activity has no per-company configuration/next-move rule, the system can behave as unrestricted in some paths — correct Movement Activity Code setup is essential before entering movements."
              ]
            },
            {
              "heading": "Cross-company Load → Discharge exception",
              "type": "callout",
              "style": "info",
              "content": "A cross-company exception allows a physical Load → Discharge handoff between sister companies even when that transition is not configured in the previous company's normal sequence. The bypass does NOT apply to a same-company Load → Discharge."
            },
            {
              "heading": "Bulk Movements — Voyage mode",
              "type": "steps",
              "items": [
                "Shipment Type → Vessel/Voyage → Movement Date → Load Containers",
                "Select rows",
                "Choose each valid Next Movement",
                "Submit"
              ]
            },
            {
              "heading": "Bulk Movements — Containers mode (MLH)",
              "type": "steps",
              "items": [
                "Paste Container Numbers → Choose Port/Terminal and Movement Date",
                "Load Containers",
                "Choose valid Next Movements",
                "Submit"
              ]
            },
            {
              "heading": "Bulk movement rules",
              "type": "rules",
              "items": [
                "Voyage mode loads containers from confirmed bookings on the selected voyage; imports add the correct discharge choice, exports add the appropriate gate-out or transhipment-load choice.",
                "Containers already ending in a load move can be disabled, and a draft BL can block further load movements after gate-in.",
                "Containers mode (MLH): unknown container codes are reported; containers with no movement history, or whose latest movement ends a cycle that must be handled via Voyage mode, are not accepted.",
                "Bulk validation is ALL-OR-NOTHING — the service validates every selected row (date, references, sequence, booking capacity/type, duplicate movement rules) first. If one or more rows fail, zero rows are created. Only a fully valid batch is saved in one transaction.",
                "For multi-port voyages, Port/Terminal may need to be selected per row. One Remarks value can be applied to the whole batch."
              ]
            },
            {
              "heading": "Excel template & Import",
              "type": "rules",
              "items": [
                "Template columns: container_no, movement_type, date, port_location, terminal, booking_no, vessel, voyage_no, remarkes, operator_code.",
                "Upload accepts one worksheet only, up to 50 MB.",
                "Container Number must already exist globally; Movement Type must match a global Movement Activity code; Port and Terminal must match existing codes.",
                "Booking is matched by reference across the sister-company group; Vessel/Voyage is matched within the relevant company/sister group.",
                "A supplied Operator Code must already exist in Operator Codes.",
                "The movement is recorded under the booking's company when a sibling company booking is found; otherwise it uses the uploading company."
              ]
            },
            {
              "heading": "Import date & reference rules",
              "type": "rules",
              "items": [
                "The date accepts supported Excel/date formats but cannot be in the future.",
                "Booking/Vessel/Voyage can be inherited from the booking or previous movement for valid mid-cycle activities; new-cycle activities do not inherit old booking/voyage data.",
                "Mid-cycle movements must stay on the previous movement's booking, except where a summary booking relaxes that continuity rule.",
                "Some reference-only activities allow Terminal to be blank. ON HIRE, OFF HIRE and Receive From Consignee have a broader import relaxation for Port/Terminal and shipment references — the relaxed set is not identical to every other entry path, so the template should not be used to bypass proper operational data."
              ]
            },
            {
              "heading": "Import is partial-success, not all-or-nothing",
              "type": "callout",
              "style": "warning",
              "content": "Each row has its own transaction: valid rows are saved immediately, while invalid rows are skipped and collected into an error report. At the end, stock is recalculated for every affected container and the user sees the success count plus a download link for errors. When unresolved import errors exist, the list replaces the Import/Overwrite actions with \"Show Errors\" until those errors are handled."
            },
            {
              "heading": "Overwrite behaviour",
              "type": "rules",
              "items": [
                "Overwrite updates existing movements and matches each row by movement ID, not Container Number.",
                "It only accepts movement IDs belonging to the uploader's sister-company group.",
                "If the movement code is changed, the new code is validated against both the previous and next movement.",
                "Successful rows update immediately; failed rows are reported — an overwrite can also finish with partial success.",
                "Overwrite refreshes the linked booking-container terminal where that assignment already exists, then recalculates container stock."
              ]
            },
            {
              "heading": "Booking assignment & part-load rules",
              "type": "rules",
              "items": [
                "Assignment applies to: COC gate-out on an export booking, SOC Gate In Full / Receive From Shipper / Gate In Empty, Stuffing Full, and RXPF on an export booking.",
                "For a regular export booking, the system must find an unassigned booking slot of the SAME equipment type; quantity, weight and package values are split from that slot onto the assigned container. No matching free slot rejects the movement instead of creating an invalid booking link.",
                "Import and summary bookings can create the booking-container link without the same free-slot requirement.",
                "Receive Empty releases the booking-container assignment. Deleting or changing an assigning movement reverses its old assignment so the booking quantity is available again.",
                "Part-load bookings let one physical movement represent related parent/child bookings — import can reuse/collapse matching gate-out rows and collect child booking references in Remarks; matching Discharge Full rows are collapsed too rather than creating duplicate physical events."
              ]
            },
            {
              "heading": "Bulk vs. single/import assignment gap",
              "type": "callout",
              "style": "warning",
              "content": "Single entry/import and Bulk Movements do not assign exactly the same set of activity types. Bulk currently auto-assigns export SNTS and STFU paths, while the single/import logic also covers COC GOMT, SOC gate-ins and RXPF. If booking assignment is the goal, confirm the Booking container details after a bulk move."
            },
            {
              "heading": "Automatic effects on other modules",
              "type": "table",
              "columns": [
                "Effect",
                "What happens"
              ],
              "rows": [
                [
                  "Container Stock",
                  "After create, edit, delete, bulk entry, import or overwrite, the container's latest non-deleted movement recalculates Container List In Stock. Stock-in activities set Available; other activities normally set Not Available. For OVP and OSL line codes, OFF Hire is a special stock-in event."
                ],
                [
                  "Operator Ownership",
                  "Each movement normally copies the Container List operator code. ON HIRE uses the operator from the latest prior movement when available, then writes that restored code back to Container List."
                ],
                [
                  "Draft BL Shipment Date",
                  "Creating Load Full (LOFU/LODF) recalculates the linked draft BL's shipment date from the latest Load Full date for its containers."
                ],
                [
                  "Trucker Guarantee",
                  "Movement create, update and delete trigger a guarantee-balance recalculation. Events such as WTOR/Gate Out can place a hold; Gate In, Stripping or Receive Empty can release it. SOC containers do not hold a trucker guarantee."
                ],
                [
                  "WTOR Cleanup",
                  "Recording a qualifying gate-out removes the earlier WTOR movement for the same container/booking where applicable, since the box is no longer waiting to be released."
                ]
              ]
            },
            {
              "heading": "Deleting movements",
              "type": "rules",
              "items": [
                "Deleting a movement is a soft delete — it disappears from normal history without physically erasing the database row.",
                "Container stock is recalculated from the remaining latest movement and booking assignment effects are reversed where applicable.",
                "A movement that assigned a container to a booking cannot be deleted when that booking already has a draft BL — the user is warned the movement cannot be deleted because the booking has a BL.",
                "Bulk delete can partially succeed: protected rows are skipped while allowed rows are deleted, and the result reports both counts.",
                "Repair workflow movements (SNTR / RCVR) and WTOR are protected in the history UI — they cannot be selected, edited or deleted there; they must be corrected through the workflow that created them."
              ]
            },
            {
              "heading": "Exports",
              "type": "table",
              "columns": [
                "Export",
                "What it produces"
              ],
              "rows": [
                [
                  "All Movement",
                  "Exports all matching movement rows, newest first, using the current search/cross-line scope. Includes Container/Type, SOC/COC, global and line movement codes, F/E, event date, port/depot, AV/DM, agency, booking, trucker, vessel/voyage, Remarks, POL and POD."
                ],
                [
                  "Last Movement",
                  "Exports only the newest matching row per container, using movement date and ID as the tie-breaker."
                ],
                [
                  "Summary Movement",
                  "Driven by selected equipment types."
                ],
                [
                  "Equipment Tracking",
                  "Uses the current filters and can optionally request the container's last cycle."
                ]
              ]
            },
            {
              "heading": "Export naming note",
              "type": "callout",
              "style": "info",
              "content": "Despite the internal route/class names, the visible menu behavior is as described above: \"All Movement\" exports all matching history, while \"Last Movement\" exports one latest row per container. The separate MovementsExportAll implementation is a legacy/unwired exporter and is not the source of the current menu's Last Movement output."
            },
            {
              "heading": "Company-specific behaviour",
              "type": "table",
              "columns": [
                "Company",
                "Behaviour"
              ],
              "rows": [
                [
                  "MLH",
                  "Shows Cross/Operator Code filters, Container Condition and the pasted-container Bulk Mode. Cross works within the sister-company code group, not across unrelated companies."
                ],
                [
                  "SIDRA_EG",
                  "RCVC has special reference inheritance/relaxed handling in import and bulk processing."
                ],
                [
                  "OVP / OSL",
                  "OFF Hire counts as In Stock."
                ],
                [
                  "Sobek",
                  "Remarks are displayed directly in the main movement grid."
                ]
              ]
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Movement Control is the operational source of truth for where each container is, what happened to it and what may happen next. A wrong date, booking or activity can change stock availability, block the next move, misassign booking capacity, alter guarantee balances or set the wrong draft BL shipment date. When a container status looks wrong, inspect its full chronological history first — correct the movement sequence rather than manually changing In Stock on the Container List."
            }
          ]
        }
      ]
    },
    {
      "id": "storage-detention-power",
      "title": "Storage, Detention & Power",
      "icon": "calculator",
      "modules": [
        {
          "id": "bl-storage",
          "title": "BL Storage",
          "icon": "calculator",
          "summary": "Per-document storage calculation for one Import booking or Export BL — the screen that produces a Storage Invoice or Storage Extension Invoice.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "Calculate terminal storage charges for one Import booking or one Export BL, container by container, using that document’s movements and the live Storage tariff (port + terminal + customer, still valid depending on the container movement data). This is the per-document screen operations uses to produce a Storage Invoice or a Storage Extension Invoice. It is not a date-range fleet report — that is Storage by Period."
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
                  "Storage, Detention & Power → BL Storage"
                ],
                [
                  "Route",
                  "storage.index"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Search the Document",
                  "desc": "Type a BL/Booking ref and pick an Import booking or an Export BL.",
                  "icon": "search"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Choose Containers & Clock",
                  "desc": "Select containers (or All), set From/To movements, Till Date and day-count flags.",
                  "icon": "clipboard"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Calculate, then Bill",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Calculate",
                    "Create invoice",
                    "Create Extension",
                    "Export Excel"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4 · SYSTEM CHECK",
                  "title": "System Prices Slabs",
                  "tone": "system",
                  "desc": "Looks up the Storage tariff, pours days through slabs, and totals only boxes with a start movement.",
                  "icon": "activity"
                },
                {
                  "step": 5,
                  "badge": "RESULT",
                  "title": "Invoice or Extension Ready",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Create invoice writes or updates a draft Storage Invoice",
                    "After confirm, only Create Extension is allowed"
                  ]
                }
              ]
            },
            {
              "heading": "What the user fills in",
              "type": "table",
              "columns": [
                "Field",
                "Meaning"
              ],
              "rows": [
                [
                  "BL Number",
                  "Required type-ahead. Import bookings tagged [Import]; Export BL drafts tagged [Export]. Search is limited to the logged-in company. Import only lists bookings that already have movements and are either not transhipment or transhipment discharging in Egypt."
                ],
                [
                  "Container No",
                  "Required multi-select: containers on the document that already have a movement. All cannot be mixed with individual boxes. Boxes with no movement are listed in a warning and cannot be calculated."
                ],
                [
                  "From",
                  "Start of the storage clock. Import is hidden and posts DCHF. Export offers RCVS and STFU."
                ],
                [
                  "To",
                  "Optional end activity. Import: SNTC, RSTR. Export: LODF. Mutually exclusive with Till Date."
                ],
                [
                  "Till Date",
                  "Optional end date. If empty and To is empty, charging runs through today or the cycle-complete movement. Must be after the start date."
                ],
                [
                  "Apply First Day",
                  "Default ON. Adds 1 calendar day (include the start date)."
                ],
                [
                  "Execute Last Day",
                  "Default OFF. Subtracts 1 calendar day (exclude the end date)."
                ],
                [
                  "Administration Fees",
                  "Optional. Auto-checked for Import, auto-unchecked for Export. Does not change Grand Total — it only tells the invoice screen to add ADFE."
                ],
                [
                  "Consolidation",
                  "When ticked, zero-rate (free) slabs are skipped so the table starts at the first paid period."
                ]
              ]
            },
            {
              "heading": "How days and money are calculated",
              "type": "rules",
              "items": [
                "One container at a time. Boxes with no start movement are skipped — they do not fail the whole BL.",
                "Start: Import DCHF/RCVF; Export RCVS/STFU/RCVF; Empty RCVF/DCHF/RCVS/ONHR.",
                "End: a cycle-complete movement inside the allowed window marks the row completed. Otherwise Till Date, else To date, else today — and the row is in_completed.",
                "A cycle-complete movement after Till Date is ignored for this calculation.",
                "Cycle-complete: Import TRFF/RSTR/SNTC; Export LODF/TRFF; Empty TRFE/SNTS/LODE/OFHR.",
                "Days = calendar days + Apply First Day − Execute Last Day, then poured through tariff slabs in order.",
                "Storage always uses 0 booking free time — quotation free time is not used here.",
                "Category: IMO if flagged, else OOG, else Standard. With a quotation the flag comes from the quotation line for that equipment type. Without a quotation, Import uses the container line; Export always falls back to Standard."
              ]
            },
            {
              "heading": "Which Storage tariff is used",
              "type": "rules",
              "items": [
                "Type IMPORT/STORAGE or EXPORT/STORAGE. Export port = load port; Import port = discharge port. Terminal = booking terminal_id.",
                "Customer: Export = booking customer; Import = receiver, else consignee.",
                "Customer-specific tariff wins over Standard at the same port+terminal.",
                "Valid To is checked against this container’s end date: completed rows may still use an expired tariff that was valid on the completion date; in_completed rows need a tariff valid today.",
                "Tariff type from shipment + full/empty: ESTO, EEST, ISTO, IEST, or ECST.",
                "Company is always the logged-in company. Operator Code does not redirect the tariff here (unlike BL Detention).",
                "Missing tariff or missing type+category slab stops the whole calculation."
              ]
            },
            {
              "heading": "Create Invoice & Extension",
              "type": "table",
              "columns": [
                "Action",
                "Rule"
              ],
              "rows": [
                [
                  "Create invoice",
                  "Storage Invoice. Charge code IS (Import) or ES (Export). Only containers with total > 0 are sent. Updates an existing draft instead of creating a second one."
                ],
                [
                  "Grand Total <= 0",
                  "Both buttons stay disabled."
                ],
                [
                  "Confirmed Storage Invoice exists",
                  "Create invoice disabled. Create Extension enabled."
                ],
                [
                  "Create Extension",
                  "Only boxes whose current To is SNTC, No Next Move or WTOR. Starts from the latest confirmed invoice end date. Invoice type: Extention Storage Invoice."
                ],
                [
                  "Administration Fees",
                  "Adds ADFE on the invoice, not on this table. For MLH the posted amount is 100 when currency is EGP, otherwise 5."
                ]
              ]
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "This is the gate from operations movements to a customer storage bill. If the From movement is missing, the container silently drops out. If the tariff is missing, expired or on the wrong port/terminal/customer, Calculate refuses the whole BL on purpose. The most common live mistake is confirming a Storage Invoice and then trying Create invoice again — the screen will only allow an Extension, and only for boxes still sitting on SNTC / no next move / WTOR."
            }
          ]
        },
        {
          "id": "bl-detention",
          "title": "BL Detention",
          "icon": "calculator",
          "summary": "Per-document detention calculation for one Import booking or Export BL — bills the equipment overdue clock and produces a Detention Invoice.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "Calculate detention (equipment overdue) charges for one Import booking or one Export BL, container by container, from the document’s movements and the live Detention tariff. Same search and Calculate → Invoice / Extension pattern as BL Storage. Differences that matter: different start/end movements, quotation free time is used (Import only), no Administration Fees, no Consolidation, and the invoice is a Detention Invoice, not a Storage Invoice."
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
                  "Storage, Detention & Power → BL Detention"
                ],
                [
                  "Route",
                  "dententions.index"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Search the Document",
                  "desc": "Pick an Import booking or Export BL. Import bookings with booking_confirm = 3 are excluded.",
                  "icon": "search"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Set From / To / Till Date",
                  "desc": "From/To stay visible for both directions. Import From is DCHF; Export From is SNTS.",
                  "icon": "clipboard"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Calculate, then Bill",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Calculate",
                    "Create invoice",
                    "Create Extension"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4 · SYSTEM CHECK",
                  "title": "Apply Free Time",
                  "tone": "system",
                  "desc": "Import uses quotation/booking free time. Export free time is always 0. Slab category is always Standard.",
                  "icon": "activity"
                },
                {
                  "step": 5,
                  "badge": "RESULT",
                  "title": "Detention Invoice Ready",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Create invoice writes a Detention Invoice (ID/ED)",
                    "Confirmed invoice unlocks Extension only"
                  ]
                }
              ]
            },
            {
              "heading": "Clock and free time",
              "type": "table",
              "columns": [
                "Rule",
                "Value"
              ],
              "rows": [
                [
                  "Import From / To",
                  "From DCHF. To RSTR, RCVC."
                ],
                [
                  "Export From / To",
                  "From SNTS. To RCVS, RCVE."
                ],
                [
                  "Cycle-complete",
                  "Import RSTR/RCVC. Export RCVS/RCVE."
                ],
                [
                  "Free time — Export",
                  "Always 0."
                ],
                [
                  "Free time — Import",
                  "Quotation equipment-line free_time, else the booking-container-detail free_time. Free days eat the first slabs at rate 0."
                ],
                [
                  "Category",
                  "Always Standard. IMO/OOG flags are ignored."
                ],
                [
                  "Reefer NOR",
                  "Same dry-equivalent lookup as storage: RH→HC, FR→HC, TK→DV."
                ]
              ]
            },
            {
              "heading": "Which Detention tariff is used",
              "type": "rules",
              "items": [
                "Type IMPORT/DETENTION or EXPORT/DETENTION. No ESTO/ISTO full/empty type filter.",
                "Port/terminal/customer and customer-vs-standard priority match BL Storage.",
                "Valid To is checked against the container’s own end date, not flatly today.",
                "Company can be redirected by the container’s Operator Code: find a sister company that shares both that line_code and the same company code as the BL’s company.",
                "No Operator Code, or no unique sister match → logged-in company. More than one match prefers the same agency_code.",
                "This is the one calculation on this module where Operator Code can change whose tariff is billed. The result table shows that Tariff Company per row."
              ]
            },
            {
              "heading": "Create Invoice & Extension",
              "type": "rules",
              "items": [
                "Invoice main_type: Detention Invoice. Charge type posted is demurrage. Charge code ID (Import) or ED (Export).",
                "Button lock looks for a Detention Invoice, not a Storage Invoice.",
                "Extension eligibility is the same as storage: current To must be SNTC, No Next Move or WTOR.",
                "Already-billed days on the latest confirmed Detention / Extention Detention invoice are subtracted."
              ]
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Storage bills the terminal stay; this screen bills the equipment. Mixing the two invoices, or using storage movements (RCVS/LODF) here, produces the wrong clock. The most common Import mistake is an empty free_time on the quotation/booking line — the slab engine then bills from day one. On Export, free time is hardcoded to 0, so every day past SNTS is potentially chargeable."
            }
          ]
        },
        {
          "id": "storage-by-period",
          "title": "Storage by Period",
          "icon": "calculator",
          "summary": "Fleet storage report across many containers by yard period or by voyage — read-only; billing still happens on BL Storage.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "A storage report across many containers — not one BL. Operations uses it to see what storage would be, then view it on screen or export Excel. It does not create invoices. Billing a customer still happens on BL Storage. The screen has two mutually exclusive paths: Period/terminal (who was on this yard in this window) or Vessel/Voyage (what would storage be for every box on this sailing)."
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
                  "Storage, Detention & Power → Storage by Period"
                ],
                [
                  "Route",
                  "calculation-storage-period.index"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1 · DECISION",
                  "title": "Pick a Path",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Period / terminal (no voyage)",
                    "Vessel / Voyage"
                  ]
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Fill the Path Filters",
                  "desc": "Period path: Status, Import/Export if Full, Egypt port, terminals, From/Till dates. Voyage path: sailing, optional Cross and Shipment.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3",
                  "title": "Calculate or Export",
                  "desc": "View the on-screen table or download ExportStorage_{timestamp}.xls. There is no Create Invoice.",
                  "icon": "clipboard"
                },
                {
                  "step": 4,
                  "badge": "RESULT",
                  "title": "Fleet Storage Picture",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Period path answers who was on the yard",
                    "Voyage path prices every box on that sailing"
                  ]
                }
              ]
            },
            {
              "heading": "The two paths",
              "type": "table",
              "columns": [
                "Path",
                "What it does"
              ],
              "rows": [
                [
                  "Period / terminal",
                  "Egypt port + terminals, Full or Empty, optional Import/Export, From Date + Till Date. Port, terminal and status are required."
                ],
                [
                  "Vessel / Voyage",
                  "Selecting any voyage switches the whole run. Always treated as Full. Port, terminal, status and Import/Export are ignored. Dates become optional. Each box uses its booking’s own port, terminal and company."
                ]
              ]
            },
            {
              "heading": "Which containers are included",
              "type": "rules",
              "items": [
                "Period path: a start movement at one of the selected terminals on/before Till Date, matching Full/Empty. Full+Export starts RCVS/RCVF; Full+Import DCHF/RCVF; Empty RCVC/RCVE/DCHE/ONHI.",
                "Voyage path: every container on a booking of the selected sailing (container-detail lines or a movement against that booking). No terminal filter and no start-movement-in-window filter. Empty is not available.",
                "Cross (voyage path only) includes sister companies that share the same company code and expands the sailing to those sisters’ copies of the same vessel + voyage number + leg.",
                "A complete movement before From Date skips that container (cycle already finished before the period)."
              ]
            },
            {
              "heading": "Days, free days and tariff",
              "type": "rules",
              "items": [
                "Apply First Day is always ON. Execute Last Day is not used. Booking free time is forced to 0 — FREE DAYS shows the first zero-rate tariff slab.",
                "Days before the window (get-in earlier than From Date) are subtracted and eat the early slabs first, so free time already used is not given again.",
                "Period path looks up the filter port + selected terminals. Voyage path uses the booking’s load/discharge port and terminal, and the booking’s company.",
                "Full uses ESTO/ISTO from the booking shipment and exact type+category (same IMO/OOG/Standard rule as BL Storage).",
                "Empty chooses exactly one type: Depot terminal → ECST; Export booking → EEST; Import or a DCHE movement → IEST; else ECST. Empty slabs match by size prefix only."
              ]
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "The easy mistake on the period path is treating From Date as get-in — get-in can be weeks earlier; From Date is only the report window. The easy mistake on the voyage path is still filling Port / Terminal / Status and expecting them to apply — they do not. Wrong path = wrong population and often a different rate card."
            }
          ]
        },
        {
          "id": "detention-by-period",
          "title": "Detention by Period",
          "icon": "calculator",
          "summary": "Fleet detention report across many full bookings by movement window or by voyage — read-only; customer bills still go through BL Detention.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "A detention report across many full bookings — not one BL. It does not create invoices. Like Storage by Period, picking a Vessel/Voyage switches the whole run: Period/movement path finds boxes that hit a To movement in a date window; Voyage path prices every full box on that sailing."
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
                  "Storage, Detention & Power → Detention by Period"
                ],
                [
                  "Route",
                  "calculation-dentention-period.index"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1 · DECISION",
                  "title": "Pick a Path",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Period / movement (no voyage)",
                    "Vessel / Voyage"
                  ]
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Fill From / To or Sailing",
                  "desc": "Period path: Import/Export, one From, one or more To codes, From/Till dates. Voyage path hides From/To.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3",
                  "title": "Calculate or Export",
                  "desc": "View the table or download ExportDentention_{timestamp}.xls. No Create Invoice.",
                  "icon": "clipboard"
                },
                {
                  "step": 4,
                  "badge": "RESULT",
                  "title": "Fleet Detention Picture",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "DM DAYS = max(Total Days − Free Days, 0)",
                    "Use BL Detention if the same numbers must become an invoice"
                  ]
                }
              ]
            },
            {
              "heading": "Period-path movements — not the same as BL Detention",
              "type": "callout",
              "style": "warning",
              "content": "Period Export starts at RCVS and finds boxes on LODF. BL Detention Export starts at SNTS and ends at RCVS/RCVE. Same word detention, different operational clock. Do not mix the two screens’ movement pairs and expect the totals to agree."
            },
            {
              "heading": "Inclusion and calculation",
              "type": "rules",
              "items": [
                "Booking Type is display-only: always full. Empty bookings are not offered.",
                "Period path includes company movements whose activity is one of the selected To codes in the date window.",
                "Voyage path includes every container on the sailing’s bookings. No To-code filter and no date window at the inclusion step.",
                "Missing start movement on the period path STOPS the whole report. On the voyage path that box is skipped and the rest still calculates.",
                "Free time: Export 0; Import quotation free_time else booking-container-line free_time.",
                "Slab is the first row for that equipment type with no category filter. Reefer NOR still maps RH/FR/TK to dry equivalents.",
                "Tariff company is the booking’s company (so Cross sister-line bookings price from that sister’s tariff)."
              ]
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Three traps: Period Export is RCVS→LODF, not the BL Detention Export clock SNTS→RCVS/RCVE. On the period path a single missing start movement aborts the entire run. Picking a Vessel/Voyage does not add a column to the period filter — it replaces the filter, and each booking’s own company/port/terminal picks the tariff."
            }
          ]
        },
        {
          "id": "power-calculation",
          "title": "Power Calculation",
          "icon": "activity",
          "summary": "Per-document reefer power (plug-in) calculation for one Import booking or Export BL — produces a Power Invoice, independent of Storage and Detention.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "Calculate reefer power (plug-in / electricity) charges for one Import booking or one Export BL, using a per-container movement clock like storage, but the POWER tariff family (IMPORT/POWER or EXPORT/POWER). Invoices created here are Power Invoice / Extention Power Invoice. They reuse the storage invoice and storage-extension screens with cal_type = power — they are not detention invoices."
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
                  "Storage, Detention & Power → Power Calculation"
                ],
                [
                  "Route",
                  "power.index"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Search the Document",
                  "desc": "Same Import-booking / Export-BL type-ahead as BL Storage.",
                  "icon": "search"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Set the Power Clock",
                  "desc": "Import From DCHF, To SNTC/RSTR. Export From RCVS, To LODF. STFU is not a power start. No Administration Fees or Consolidation.",
                  "icon": "clipboard"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Calculate, then Bill",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Calculate",
                    "Create invoice",
                    "Create Extension"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4 · SYSTEM CHECK",
                  "title": "Price POWER Slabs",
                  "tone": "system",
                  "desc": "Booking free time is 0. Category is forced to Standard. Company is always the logged-in company.",
                  "icon": "activity"
                },
                {
                  "step": 5,
                  "badge": "RESULT",
                  "title": "Power Invoice Ready",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Charge codes PI (Import) or PE (Export)",
                    "A confirmed Storage Invoice on the same BL does not block Power"
                  ]
                }
              ]
            },
            {
              "heading": "Import end-date mismatch",
              "type": "callout",
              "style": "danger",
              "content": "Power’s cycle-complete check is a fixed pair — RCVC and LODF — for both directions. Import To options are SNTC and RSTR, and neither is in that pair. Every Import row therefore shows in_completed, and tariff validity is checked against today rather than the real completion date. If To is selected and the box already has an RCVC, the end-date lookup can ignore SNTC/RSTR and bill through today, or drop the container entirely when Till Date is also set — with no warning. BL Storage and BL Detention do not have this problem."
            },
            {
              "heading": "Tariff and invoices",
              "type": "rules",
              "items": [
                "A valid STORAGE tariff does not substitute. The row must be IMPORT/POWER or EXPORT/POWER at the booking port+terminal.",
                "Customer-specific preferred over Standard. Operator Code is not used.",
                "Create invoice opens the same storage invoice screen with cal_type=power. Button lock looks at Power Invoice only.",
                "Extension eligibility is still SNTC, No Next Move or WTOR. Already-billed Power / Extention Power days are subtracted.",
                "A BL can have Storage, Detention and Power invoices at once; confirming one type does not lock the others."
              ]
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Power is the reefer electricity bill. Using a Storage tariff or detention movements (SNTS) starts the wrong clock or the wrong rate card. The invoice buttons look identical to BL Storage but they only look at whether a Power invoice is already confirmed. If an Import row is unexpectedly missing or billed through today, the section 4 end-date mismatch — not a data problem — is the first thing to check."
            }
          ]
        }
      ]
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
      "modules": [
        {
          "id": "import-cuscar",
          "title": "Import CUSCAR",
          "icon": "file-text",
          "summary": "Generates the EDIFACT CUSCAR D.95B customs manifest required by NAFEZA for cargo arriving in Egypt.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "Import CUSCAR generates an EDIFACT customs-manifest file required by NAFEZA for cargo arriving in Egypt. One file is generated per Voyage + Egyptian Port + optional Booking selection from live Booking, Voyage, Vessel, Container and Customer data. Only Import, Load Transshipment or All-leg voyages touching an Egyptian port are offered. Export CUSCAR is a separate screen."
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
                  "EDI → Cuscar List"
                ],
                [
                  "Route (list)",
                  "cuscar.index → /edi/cuscar"
                ],
                [
                  "Route (generate)",
                  "cuscar.generate"
                ],
                [
                  "Route (submit/download)",
                  "cuscar.create"
                ],
                [
                  "Feature flags",
                  "edi, generate_edi"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Cuscar List",
                  "desc": "Sidebar → EDI → Cuscar List (edi + generate_edi flags).",
                  "icon": "file-text"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Select Voyage & Port",
                  "desc": "Pick an eligible Import voyage and the Egyptian manifest port.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Choose Booking Scope",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "All Bookings",
                    "Selected Bookings",
                    "Cross Companies"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Generate CUSCAR",
                  "desc": "Confirmed bookings load for the voyage/port; press Generate.",
                  "icon": "clipboard"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "System Validates All Data",
                  "tone": "system",
                  "desc": "Checks containers, vessel, ETA, ACID/tax IDs, exporter country and tare weight.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "Manifest Saved & Downloaded",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Valid selection produces a saved .edi file",
                    "Any validation failure produces an Excel error report instead"
                  ]
                }
              ]
            },
            {
              "heading": "List screen",
              "type": "text",
              "content": "Shows generated CUSCAR records visible when the user generated them or their company appears in line_id. Columns: Ref No, Voyage/Vessel, Port, Shipment Type, BL Count and Created At. BL Count opens bookings grouped by carrier line when cross-company. Actions: Show and Download."
            },
            {
              "heading": "Search filters",
              "type": "filters",
              "items": [
                "Voyage / Vessel"
              ]
            },
            {
              "heading": "Generate form",
              "type": "steps",
              "items": [
                "Pick an Import / Load-Transshipment voyage that touches Egypt.",
                "Pick the Egyptian Port for the manifest.",
                "Optionally filter by a specific destination port.",
                "Select confirmed bookings (booking_confirm = 1 or 4). Selecting none includes every matching booking.",
                "Leave Cross enabled (default) to include sibling voyages with the same voyage_no + serial across the company-code group."
              ]
            },
            {
              "heading": "Duplicate-generation guard",
              "type": "callout",
              "style": "warning",
              "content": "Generation is blocked when the same sibling-voyage pool, port, is_load_port and booking selection already exists. The user is directed to re-download the existing Ref No from the list."
            },
            {
              "heading": "Request-level container checks",
              "type": "rules",
              "items": [
                "Every Booking container-detail row must have a selected Container.",
                "Every selected Container must have an Equipment Type.",
                "A failure rejects the whole request before CUSCAR building begins."
              ]
            },
            {
              "heading": "Parent / child Booking merge",
              "type": "callout",
              "style": "info",
              "content": "Booking references differing only by leading slashes are treated as one logical shipment. The row with the fewest slashes is the parent; child containers are merged into it so the file contains one CNI consignment per real shipment."
            },
            {
              "heading": "Per-booking validation",
              "type": "rules",
              "items": [
                "Vessel Call Sign and IMO Number are required; missing either rejects every booking on that voyage.",
                "An ETA must exist for the relevant Egyptian or leg-arrival port.",
                "Egypt-bound full-container bookings require a 19-digit ACID.",
                "Egypt-bound full-container bookings require a 9-digit Egyptian Importer Tax ID.",
                "Exporter ID is required, alphanumeric and up to 35 characters.",
                "Exporter Country must have a valid ISO 3166-1 alpha-2 code.",
                "Every Container requires Tare Weight, including empty/transhipment bookings."
              ]
            },
            {
              "heading": "Validation failure behaviour",
              "type": "callout",
              "style": "danger",
              "content": "If any booking fails per-booking validation, no .edi file is saved. The request returns a CuscarErrorsExport Excel report containing booking reference, vessel/voyage and the exact reason. Generation succeeds only when every selected booking passes."
            },
            {
              "heading": "Cross-company sharing",
              "type": "rules",
              "items": [
                "Cross is enabled by default and loads confirmed bookings from sibling voyages sharing voyage_no + serial across companies in the same company-code group.",
                "Every involved company ID is stored in line_id.",
                "Users from any involved sister company can see and re-download the same saved CUSCAR.",
                "List and Show group bookings by carrier line when multiple companies are involved."
              ]
            },
            {
              "heading": "What the .edi file contains",
              "type": "rules",
              "items": [
                "One EDIFACT CUSCAR D.95B message inside a UNB/UNH…UNT/UNZ envelope.",
                "Header includes sender/receiver, Egypt-time creation timestamp, vessel IMO, call sign, vessel name and voyage transport details.",
                "Direct, transhipment and transit shipments use different transport-stage handling.",
                "FCL containers are declared at message-header level; each booking receives a CNI consignment block with ports, parties and goods.",
                "Goods include container weight, description and detected IMO dangerous-goods classification.",
                "Free text is sanitized to plain ASCII, including conversion of look-alike Cyrillic characters."
              ]
            },
            {
              "heading": "CUSCAR record & filename",
              "type": "table",
              "columns": [
                "Item",
                "Behaviour"
              ],
              "rows": [
                [
                  "Ref No",
                  "CUSC + company booking_code + voyage number + per-company running serial from Settings.cuscar_ref_no."
                ],
                [
                  "Stored selection",
                  "Voyage, port, is_load_port, sorted booking_ids (or null for all), and all involved company IDs in line_id."
                ],
                [
                  "Filename",
                  "cuscar_[ref_no]_[Egypt-time timestamp].edi"
                ]
              ]
            },
            {
              "heading": "Show & re-download",
              "type": "callout",
              "style": "info",
              "content": "Show opens bookings grouped by carrier line and lazy-loads Container details. Download does not replay a stored file: it regenerates the .edi content from current master data using the saved booking selection, so corrections appear in the re-download."
            },
            {
              "heading": "Inbound CUSCAR is a separate workflow",
              "type": "callout",
              "style": "warning",
              "content": "A separate implemented but currently unlinked Upload EDI workflow consumes a CUSCAR received from another party and can create Bookings, Containers and an EdiUpload audit record. It validates UNB sender/receiver against the current company. It is not the Generate CUSCAR screen documented here."
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Import CUSCAR is a regulatory-compliance generator for Egyptian customs. Its validation report is often the earliest precise signal of missing ACID/tax IDs, vessel IMO/call sign, ETA, customer country or Container tare weight."
            }
          ]
        },
        {
          "id": "export-cuscar",
          "title": "Export CUSCAR",
          "icon": "file-text",
          "summary": "Generates the EDIFACT CUSCAR D.95B customs manifest required by NAFEZA for cargo leaving Egypt — one file per Voyage + Egyptian load port + chosen BL Drafts.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "Export CUSCAR builds the EDIFACT customs-manifest file required by NAFEZA for cargo leaving Egypt. One file is generated per Voyage + Egyptian Load Port + a chosen set of BL Drafts from live Export BL, Booking and Voyage data. Only voyages whose leg is Export or All, that touch at least one Egyptian port, and that already have at least one BL Draft are offered. Import arrivals are generated on Cuscar List, not here. Both screens write into the same CUSCAR table; Export rows are the ones whose Egyptian port is the load port (is_load_port = 1)."
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
                  "EDI → Export Cuscar"
                ],
                [
                  "Route (list)",
                  "cuscar.export.index → /edi/cuscar-export"
                ],
                [
                  "Route (generate/download)",
                  "cuscar.export.create"
                ],
                [
                  "Route (show)",
                  "cuscar.export.show"
                ],
                [
                  "Route (re-download)",
                  "cuscar.export.download"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Export CUSCAR",
                  "desc": "Sidebar → EDI → Export Cuscar. The list shows this company’s previously generated export files.",
                  "icon": "file-text"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Generate Export CUSCAR",
                  "desc": "Pick an Export voyage, the Egyptian load port if there is more than one, and at least one BL Draft (all ticked by default).",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Generate & Download",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Generate & Download",
                    "Show",
                    "Re-download",
                    "Submit to Nafeza"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4 · SYSTEM CHECK",
                  "title": "All BLs Must Pass",
                  "tone": "system",
                  "desc": "Vessel IMO/call sign, ETD, exporter tax ID, assigned containers and tare are validated. Any failure downloads an Excel error report and saves nothing.",
                  "icon": "activity"
                },
                {
                  "step": 5,
                  "badge": "RESULT",
                  "title": "File Saved",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "A CUSC-EXP- ref is stored and the .edi file downloads",
                    "Submit to Nafeza is a separate, stricter step"
                  ]
                }
              ]
            },
            {
              "heading": "The list screen",
              "type": "rules",
              "items": [
                "Shows only this company’s export CUSCARs (is_load_port = 1), newest first, 30 per page.",
                "Columns: Ref No, Voyage/Vessel, Port (Load), clickable BL Count, Created At, Nafeza badge, Actions.",
                "Nafeza badge: Uploaded (every linked booking Manifest Uploaded), N/M (some uploaded), or a dash (none).",
                "The Vessel/Voyage filter dropdown is filled with eligible voyages, but pressing Filter currently does not narrow the table — voyage_id is posted and ignored."
              ]
            },
            {
              "heading": "Generate modal",
              "type": "rules",
              "items": [
                "Opened from Generate Export CUSCAR on the list — not a separate full page like Import CUSCAR.",
                "If the voyage has exactly one Egyptian port it is used automatically; otherwise a Load Port dropdown appears.",
                "Every BL Draft starts ticked. At least one must stay ticked — unlike Import, select none = all does not apply.",
                "Each card shows BL ref, booking ref, UCR (green) or No UCR on booking (red), and consignee.",
                "Missing UCR does not block Generate — it only blocks Submit to Nafeza later."
              ]
            },
            {
              "heading": "Validation before the file is saved",
              "type": "table",
              "columns": [
                "Check",
                "Rule"
              ],
              "rows": [
                [
                  "Required submit",
                  "Voyage, Load Port, and at least one BL Draft."
                ],
                [
                  "Duplicate guard",
                  "Meant to block the same company + voyage + load port + BL set. It currently compares new bl_draft_ids against the old record’s booking_ids, so a true duplicate is usually not caught."
                ],
                [
                  "Container assignment",
                  "Every container line on each selected BL’s booking must already have a real container. Failures return export_cuscar_errors_[Egypt-time].xlsx."
                ],
                [
                  "Vessel",
                  "Call Sign and IMO Number must both be filled — failure hits every BL on the voyage."
                ],
                [
                  "ETD",
                  "Voyage Ports must have an ETD for that booking’s load port. Export uses departure, not ETA."
                ],
                [
                  "UCR",
                  "Optional at Generate. If present (and not just 0) it must be exactly 19 digits."
                ],
                [
                  "Exporter Tax ID",
                  "booking.exportal_id, else customer tax card, else BL shipper tax card. Required, exactly 9 digits."
                ],
                [
                  "Tare weight",
                  "Required on every assigned container. Defaults tried from size + category (20 Dry 2150, 40 Dry 3750, 20 Reefer 2900, 40 Reefer 4560)."
                ]
              ]
            },
            {
              "heading": "Partial success is not written",
              "type": "callout",
              "style": "warning",
              "content": "Unlike Import, a partial success (some BLs good, some bad) is not saved. All selected BLs must pass or the whole run stops, no CUSCAR row is created, and the Excel error report is downloaded."
            },
            {
              "heading": "What is written",
              "type": "table",
              "columns": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "File",
                  "One EDIFACT CUSCAR D.95B message. Sender = company line code, receiver = NAFEZA."
                ],
                [
                  "Header",
                  "Egyptian LOAD port (LOC+9) and ETD (DTM+133). Direction EXPORT."
                ],
                [
                  "Parties",
                  "From the BL Draft: shipper NAD+CZ, consignee NAD+CN, notify if present. UCR as RFF+AFM after the shipper."
                ],
                [
                  "Ref No",
                  "CUSC-EXP- + company booking_code + voyage number + running Settings.cuscar_ref_no. Import uses CUSC without -EXP-."
                ],
                [
                  "Filename",
                  "export_cuscar_[ref_no]_[Egypt-time].edi"
                ]
              ]
            },
            {
              "heading": "Show, re-download and Nafeza",
              "type": "rules",
              "items": [
                "Download re-generates the .edi from current BL/booking/vessel/container data using the saved bl_draft_ids — it is not a stored snapshot.",
                "The Show page Re-generate CUSCAR link only sends voyage + load port, so create validation rejects it. Use the list Download button to rebuild the same selection.",
                "Submit to Nafeza (when enabled) re-generates the EDI and POSTs it. Every linked booking must have a valid 19-digit UCR (not blank, not 19 zeroes).",
                "On success the bookings are marked Manifest Uploaded and the list badge flips to Uploaded.",
                "Generate & Download only produces the local .edi file. Submit is the only place on this screen that talks to Nafeza."
              ]
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Export CUSCAR is the outbound customs manifest for cargo leaving Egypt. Generate is the data-quality gate (vessel IMO/call sign, ETD, exporter tax ID, container assignment, tare). Submit to Nafeza is the compliance gate (every BL must already have a 19-digit UCR). The most common live mistake is generating a file that still has no UCR — it downloads fine and then fails on Submit."
            }
          ]
        }
      ]
    },
    {
      "id": "trucking",
      "title": "Trucking",
      "icon": "truck",
      "modules": [
        {
          "id": "truckers-list",
          "title": "Truckers List",
          "icon": "truck",
          "summary": "Master list of trucking companies that move containers for bookings — feeds CRO trucker assignment, Trucker Guarantees and Trucking Tariffs.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "The master list of trucking companies (truckers) that pull containers in and out of the port/depot for our bookings. A trucker on its own does nothing — it becomes important when it is used elsewhere: assigned as the \"CRO trucker\" on a booking (printed on the CRO, Gate In and VGM letters), holds a Trucker Guarantee (cash/cheque deposit) against container movements, or has a Trucking Tariff (price list) set against it."
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
                  "Trucking → Truckers List"
                ],
                [
                  "Route (list)",
                  "trucker.index"
                ],
                [
                  "Feature flags",
                  "operations, truckers_list"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Truckers List",
                  "desc": "Sidebar → Trucking → Truckers List (operations + truckers_list flags).",
                  "icon": "truck"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Search by Name",
                  "desc": "Check the trucker is not already registered before adding a new one.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Choose an Action",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Add New",
                    "Upload Excel",
                    "Edit",
                    "Delete"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Enter Details & Save",
                  "desc": "Name is required; Phone, Address, Contact Person, Tax No and attachments are optional.",
                  "icon": "clipboard"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "System Checks Uniqueness",
                  "tone": "system",
                  "desc": "Phone and Tax No must be unique across every trucker, company-wide.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "Trucker Ready Everywhere",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Selectable as CRO trucker, in Trucker Guarantees and Trucking Tariffs",
                    "Delete blocked while a guarantee or a booking still uses it"
                  ]
                }
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
                  "Name",
                  "Required. Free text, max 255 characters."
                ],
                [
                  "Phone",
                  "Optional, max 50 characters. Must be UNIQUE across all truckers. Only digits, spaces and + - ( ) are accepted."
                ],
                [
                  "Address",
                  "Optional, free text."
                ],
                [
                  "Contact Person",
                  "Optional, free text."
                ],
                [
                  "Tax No",
                  "Optional. If filled, must be exactly 9 or 14 digits (Egyptian tax / commercial register format) and UNIQUE across all truckers."
                ],
                [
                  "Attach",
                  "Optional, multiple files. PDF, JPG or PNG only, max 2 MB each. Shown as a paperclip button with a file count in the list."
                ]
              ]
            },
            {
              "heading": "Listing & search",
              "type": "text",
              "content": "30 truckers per page, in the order they were created. One search box for Name (partial match). Columns: Name, Tax No, Phone, Address, Contact Person, Attach. The paperclip button opens a pop-up with every attached file (click to open, X to remove immediately). The list is NOT filtered by company — every company sees the same truckers."
            },
            {
              "heading": "Creating & editing rules",
              "type": "table",
              "columns": [
                "Rule",
                "Message shown"
              ],
              "rows": [
                [
                  "Name is empty",
                  "Standard \"name is required\" message."
                ],
                [
                  "Phone already used",
                  "This phone number is already registered for another trucker."
                ],
                [
                  "Tax No not 9 or 14 digits",
                  "The tax number must be either 9 or 14 digits (Egyptian format)."
                ],
                [
                  "Tax No already used",
                  "This tax number is already registered."
                ]
              ]
            },
            {
              "heading": "Edit behaviour",
              "type": "callout",
              "style": "info",
              "content": "On edit, the same rules apply (the uniqueness check ignores the trucker being edited). New files are ADDED to the existing ones — uploading does not replace old attachments. Old files are removed one by one with their X button."
            },
            {
              "heading": "Delete rules",
              "type": "table",
              "columns": [
                "Blocked when",
                "Message shown"
              ],
              "rows": [
                [
                  "Trucker has any guarantee",
                  "Cannot delete this trucker because it has a related trucker guarantee."
                ],
                [
                  "Trucker is the CRO trucker on any booking",
                  "Cannot delete this trucker because it has related booking records."
                ]
              ]
            },
            {
              "heading": "Bulk upload (Excel)",
              "type": "rules",
              "items": [
                "\"Upload\" accepts .xlsx / .xls / .csv (max 2 MB). The first row must be the headers: name, tax_no, phone, address, contact_person.",
                "Each row is checked with the same rules as the form: name required, phone and tax number not already used, tax number 9 or 14 digits.",
                "Valid rows become new truckers, stamped with the uploader's company."
              ]
            },
            {
              "heading": "How this feeds other modules",
              "type": "table",
              "columns": [
                "Area",
                "Effect"
              ],
              "rows": [
                [
                  "Booking — CRO trucker",
                  "The trucker list shown on a booking is ALL truckers. If the trucker is changed, the system re-checks the Trucker Guarantee holds for every container on that booking that already has a WTOR / GIMT / GOMT / GIFU movement, so the held amount moves to the new trucker's guarantee."
                ],
                [
                  "Printed letters",
                  "CRO letter uses the trucker chosen when printing (falls back to the booking's CRO trucker if none found for this company). Gate In letter prints the booking's CRO trucker name, or \"-\". VGM letter prints the booking's CRO trucker name only."
                ],
                [
                  "Movements",
                  "Creating WTOR movements from a booking writes the trucker's name into the movement Remarks. Movement Control's trucker filter only lists truckers actually used on this company's bookings. Movement Excel exports include the booking's CRO trucker name."
                ],
                [
                  "Trucker Guarantees & Trucking Tariffs",
                  "Both screens pick the trucker from this list."
                ]
              ]
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "The trucker is the link between a booking, the containers leaving the port, and the money we hold as guarantee. If the same trucker is registered twice under slightly different names, guarantees and bookings get split across two records, so one copy shows no guarantee balance while the other holds the containers. Always search by name before adding a new trucker."
            }
          ]
        },
        {
          "id": "trucker-guarantees",
          "title": "Trucker Guarantees",
          "icon": "briefcase",
          "summary": "Records the financial guarantee a trucker leaves before taking our containers, and tracks — live — how much of it is still free.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "A trucker who takes our containers out of the port must leave a financial guarantee (a guarantee letter, and optionally a cheque). This screen records that guarantee and shows, live, how much of it is still free. Every container the trucker currently has out is \"held\" against the guarantee at the price of its Equipment Type. When the container comes back, the hold is released and the money becomes available again. Holds are NOT entered by the user — they are created and released automatically from Movement Control and Booking."
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
                  "Trucking → Trucker Guarantees"
                ],
                [
                  "Route (list)",
                  "truckerguarantees.index"
                ],
                [
                  "Feature flags",
                  "operations, trucker_guarantees"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Prep Trucker & Prices",
                  "desc": "Trucker must already exist; every Equipment Type needs a Price (Container Control → Equipment Types).",
                  "icon": "truck"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Pick Trucker & Dates",
                  "desc": "Trucking → Trucker Guarantees → Add New. One guarantee per trucker.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Set Amounts & Status",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Letter Amount",
                    "Cheque Amount (Extend)",
                    "Status"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Save & Preview Balance",
                  "desc": "Available Balance previews amount minus containers this trucker already has out.",
                  "icon": "clipboard"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "System Holds & Releases Automatically",
                  "tone": "system",
                  "desc": "WTOR / GOMT hold the container price; GIMT / GIFU / STRP / RCVE release it.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "Guarantee Protects Bookings",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Assignment is blocked/warned when balance is short",
                    "Auto-set to Inactive 2 days before Valid To"
                  ]
                }
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
                  "Trucker",
                  "Required. ONE guarantee per trucker only. Locked (cannot be changed) once any container is held against it."
                ],
                [
                  "Valid From / Valid To",
                  "Required dates. Valid To must be on or after Valid From."
                ],
                [
                  "Guarantee Letter Amount",
                  "Required, 0 or more. The main guarantee value."
                ],
                [
                  "Cheque Amount",
                  "Optional, 0 or more. Only counted while Status is \"Extend\" — ignored in any other status."
                ],
                [
                  "Available Balance",
                  "Never typed. Always calculated. Can be NEGATIVE — that shows how far the trucker is over the limit."
                ],
                [
                  "Status",
                  "Active / Hold / Extend / Inactive. Locked while held containers are using part of the cheque."
                ]
              ]
            },
            {
              "heading": "Status meanings",
              "type": "table",
              "columns": [
                "Status",
                "Effect"
              ],
              "rows": [
                [
                  "Active",
                  "Normal. Trucker can be assigned to bookings."
                ],
                [
                  "Extend",
                  "Same as Active, plus the Cheque Amount is added to the total."
                ],
                [
                  "Hold",
                  "Trucker is hidden from the booking trucker list."
                ],
                [
                  "Inactive",
                  "Trucker is hidden from the booking trucker list. Shown with a red badge and warning icon. Set automatically near expiry."
                ]
              ]
            },
            {
              "heading": "Search filters",
              "type": "filters",
              "items": [
                "Trucker",
                "Status"
              ]
            },
            {
              "heading": "Listing & export",
              "type": "text",
              "content": "30 per page, newest first. Columns: Trucker, Valid From, Valid To, Total Amount (letter + cheque if Extend), Available Balance, Status badge (Active = green, Hold = yellow, Extend = blue, Inactive = red). \"Export\" downloads TruckerGuarantees.xlsx with the same filters and columns. If nothing matches: \"No Trucker Guarantees found.\""
            },
            {
              "heading": "Creating & editing rules",
              "type": "table",
              "columns": [
                "Rule",
                "Message shown"
              ],
              "rows": [
                [
                  "Trucker already has a guarantee",
                  "This trucker already has a guarantee."
                ],
                [
                  "Valid To before Valid From",
                  "Standard date validation message."
                ],
                [
                  "Amount / Cheque below zero",
                  "Standard numeric validation."
                ]
              ]
            },
            {
              "heading": "Edit locks",
              "type": "rules",
              "items": [
                "On SAVE (create or edit) the system re-scans every container ever put on a booking of this trucker and rebuilds the held list, so containers that went out BEFORE the guarantee existed are picked up immediately.",
                "Trucker cannot be changed once containers are held.",
                "Status cannot be changed while Status is Extend AND the held containers exceed the letter amount (they are using the cheque). The form shows: \"Locked — the cheque is currently drawn on by held containers.\""
              ]
            },
            {
              "heading": "Delete rule",
              "type": "callout",
              "style": "danger",
              "content": "DELETE is blocked when containers are still held: \"Cannot delete this guarantee because it has containers currently held against it.\""
            },
            {
              "heading": "How the balance is calculated",
              "type": "rules",
              "items": [
                "Total = Letter Amount (+ Cheque Amount, only while Status = Extend).",
                "Held = sum of prices of containers currently held.",
                "Available Balance = Total − Held.",
                "Container price = the Price of the container's Equipment Type. The letter amount is used first; the cheque is only \"used\" by the part of Held that is above the letter amount."
              ]
            },
            {
              "heading": "When a container is held or released",
              "type": "table",
              "columns": [
                "Booking type",
                "Held by (opens)",
                "Released by (closes)"
              ],
              "rows": [
                [
                  "Import",
                  "WTOR",
                  "GIMT, STRP, RCVE"
                ],
                [
                  "Export",
                  "GOMT",
                  "GIFU, GIMT, STRP, RCVE"
                ]
              ]
            },
            {
              "heading": "Hold / release rules",
              "type": "rules",
              "items": [
                "Checked every time a movement is created, edited, deleted or restored for that container (and when a guarantee is saved).",
                "Only movements linked to a booking that HAS a CRO trucker count. The guarantee used is the one of that booking's trucker — if the trucker has no guarantee, nothing is held.",
                "If the booking's trucker is changed, the hold moves to the new trucker's guarantee.",
                "If the data shows a container open on two bookings, the most recent one wins."
              ]
            },
            {
              "heading": "SOC containers — never deducted from the balance",
              "type": "rules",
              "items": [
                "SOC (Shipper-Owned) containers belong to the shipper, not to us, so the trucker's guarantee does not cover them.",
                "Assigning the trucker: SOC containers are left out of the booking cost, so they never cause an \"Insufficient Balance\" warning, and a missing Equipment Type price on an SOC container does not block the assignment.",
                "Gate out (WTOR / GOMT): nothing is held for an SOC container, and the Available Balance does not change.",
                "Mixed booking (SOC + COC): only the COC containers are held and deducted.",
                "A container counts as SOC when its SOC / COC field in Container List is \"SOC\" (or, before a container number is attached, when the booking line is marked SOC). If a container is changed to SOC after it was held, the hold is NOT released immediately — it is released the next time that container has a movement added/edited/deleted, or when the trucker's guarantee is saved."
              ]
            },
            {
              "heading": "How this feeds Booking (trucker assignment) — MLH only",
              "type": "steps",
              "items": [
                "Truckers whose guarantee is Hold, Inactive or past Valid To are removed from the picker (the booking's current trucker always stays).",
                "If any non-SOC container type on the booking has no Equipment Type Price, assignment is blocked with \"Equipment Type Price Missing\".",
                "Booking cost = sum of Equipment Type price × quantity of the booking's non-SOC containers.",
                "Available ≥ cost → selectable, no warning. Available < cost → \"Insufficient Balance\" popup with shortfall and projected balance (user can confirm). No valid guarantee → \"No Trucker Guarantee\" popup to create one on the spot (dates only, amount 0, status Active)."
              ]
            },
            {
              "heading": "Equipment Type price lock",
              "type": "callout",
              "style": "info",
              "content": "This part applies to multi-line (MLH) companies only — other companies see a plain list of all truckers with no balance checks. The Price of an Equipment Type becomes read-only once any container of that type is held against a guarantee."
            },
            {
              "heading": "Automatic expiry",
              "type": "callout",
              "style": "warning",
              "content": "Every day at 21:00 the system sets to Inactive every guarantee whose Valid To is within the next 2 days or already passed (whatever its status, including Extend). It stays Inactive even if someone later extends Valid To — the user must also change the Status back."
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "This is the company's protection against a trucker keeping or losing containers. Wrong or missing data here fails silently: no Equipment Type price means containers are held at 0; a missing guarantee means nothing is held at all; an expired guarantee makes the trucker vanish from bookings. When a balance looks wrong, check the container movements (WTOR/GOMT out, GIMT/GIFU back) and the booking's trucker — not this form."
            }
          ]
        },
        {
          "id": "trucking-tariffs",
          "title": "Trucking Tariffs",
          "icon": "calculator",
          "summary": "Price list agreed with a trucker for moving containers between two Egyptian terminals/depots — feeds Trucking Orders with cost and selling rates.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "The price list agreed with a trucker for moving containers between two Egyptian terminals/depots, for a period of time. For every container size (20ft / 40ft) it stores three charges — Trucking, Lift On and Lift Off — each with a COST (what the trucker charges us) and a SELLING RATE (what we charge the customer). Its only consumer is Trucking Orders: when an order is created, the selling rates are copied from the chosen tariff."
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
                  "Trucking → Trucking Tariffs"
                ],
                [
                  "Route (list)",
                  "truckingtariffs.index"
                ],
                [
                  "Feature flags",
                  "operations, trucking_tariffs"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Trucking Tariffs",
                  "desc": "Trucking → Trucking Tariffs → Add New.",
                  "icon": "calculator"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Pick Trucker & Route",
                  "desc": "Select Trucker, From terminal, optionally To, and Validity From/To.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Add Size Blocks",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "20ft Block",
                    "40ft Block"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Enter Cost & Selling Rate",
                  "desc": "Trucking, Lift On and Lift Off per size — selling rate must be ≥ cost.",
                  "icon": "clipboard"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "System Checks Overlap",
                  "tone": "system",
                  "desc": "No other tariff may exist for the same trucker + route with overlapping dates.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "Tariff Ready for Orders",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Reference is auto-generated",
                    "Selectable in Trucking Orders"
                  ]
                }
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
                  "Reference",
                  "Never typed. Built on every save as: \"Trucker name - FROM, TO - validity from - validity to\" (terminal codes). Editing the tariff rebuilds it."
                ],
                [
                  "Trucker",
                  "Required. Picked from the Truckers List."
                ],
                [
                  "From",
                  "Required. Terminal/depot in Egypt only."
                ],
                [
                  "To",
                  "Optional. Terminal/depot in Egypt, must be different from From."
                ],
                [
                  "Validity From / To",
                  "Required. To must be on or after From."
                ],
                [
                  "Container Size blocks",
                  "At least one. Size is 20 or 40, one block per size (a size already added is greyed out in the picker until its block is removed)."
                ],
                [
                  "Charges (per size)",
                  "Trucking, Lift On, Lift Off. Each needs Cost and Selling Rate, both required, 0 or more."
                ]
              ]
            },
            {
              "heading": "How sizes are saved",
              "type": "callout",
              "style": "info",
              "content": "A block is not saved as \"20\" or \"40\". It is saved once for EVERY Equipment Type whose name starts with that number (e.g. 20 DV, 20 RF, 20 OT all get the same rates). Equipment Types added later are only included the next time the tariff is saved."
            },
            {
              "heading": "Listing",
              "type": "text",
              "content": "Only the user's company tariffs, 30 per page, newest first. No search filters. Columns: Reference, Trucker, From Terminal, To Terminal, Validity, Container Sizes. A details pop-up shows cost and selling rate per size and charge type."
            },
            {
              "heading": "Creating & editing rules",
              "type": "table",
              "columns": [
                "Rule",
                "Message shown"
              ],
              "rows": [
                [
                  "Selling rate lower than cost",
                  "The [Charge] selling rate must be greater than or equal to the cost."
                ],
                [
                  "Same trucker + same From + same To (empty To counts as its own route) and the dates overlap",
                  "A tariff already exists for this trucker and terminals with overlapping validity period."
                ],
                [
                  "To equals From",
                  "Standard \"different\" message."
                ],
                [
                  "No size block added",
                  "Standard \"details required\"."
                ]
              ]
            },
            {
              "heading": "Edit behaviour",
              "type": "callout",
              "style": "info",
              "content": "On edit, all rates are deleted and re-saved from the form."
            },
            {
              "heading": "Deleting",
              "type": "callout",
              "style": "danger",
              "content": "Asks \"Are you sure you want to delete this tariff?\" and deletes with no further checks. WARNING: every Trucking Order that uses this tariff is DELETED with it (database cascade), with no message."
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Trucking Orders take their prices straight from here, so a wrong selling rate or a wrong validity period goes directly onto every new order. Keep one tariff per trucker and route per period, renew it with new dates instead of editing old ones, and never delete a tariff that already has orders."
            }
          ]
        },
        {
          "id": "trucking-orders",
          "title": "Trucking Orders",
          "icon": "clipboard",
          "summary": "A job order given to a trucker, priced from a Trucking Tariff — a stand-alone record with no booking, invoice or cost link.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "A Trucking Order (job order) records a trucking job given to a trucker: which tariff it is priced on, the issue date, the container sizes, and the charge lines (charge type × size × quantity × selling rate = total). Prices are copied from the chosen Trucking Tariff when the order is prepared. The order is a stand-alone record: it is not linked to a booking, and it does not create an invoice or a cost."
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
                  "Trucking → Trucking Orders"
                ],
                [
                  "Route (list)",
                  "truckingorders.index"
                ],
                [
                  "Feature flags",
                  "operations, trucking_orders"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Confirm Tariff Exists",
                  "desc": "A valid Trucking Tariff must already exist for the trucker.",
                  "icon": "calculator"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Open Trucking Orders",
                  "desc": "Trucking → Trucking Orders → Add New.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · DECISION",
                  "title": "Pick Tariff & Sizes",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "20ft",
                    "40ft"
                  ]
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Adjust Lines & Issue Date",
                  "desc": "Charge lines auto-fill from the tariff; adjust quantities; set the Issue Date.",
                  "icon": "clipboard"
                },
                {
                  "step": 5,
                  "badge": "STEP 5 · SYSTEM CHECK",
                  "title": "System Validates Date & Duplicates",
                  "tone": "system",
                  "desc": "Issue date must fall inside the tariff validity; no duplicate charge type + size lines.",
                  "icon": "activity"
                },
                {
                  "step": 6,
                  "badge": "RESULT",
                  "title": "Job Order Saved",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Serial resets yearly per company, e.g. 15/2026",
                    "Stand-alone record — no booking, invoice or cost link"
                  ]
                }
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
                  "Job Order",
                  "Never typed. \"serial/year\", e.g. 15/2026. The serial restarts at 1 every calendar year, per company. Kept unchanged on edit."
                ],
                [
                  "Tariff",
                  "Required. Only this company's tariffs, shown by reference. The trucker comes from the tariff."
                ],
                [
                  "Issue Date",
                  "Required. Must be within the tariff's Validity From / To."
                ],
                [
                  "Container Sizes",
                  "Required, one or more of 20 / 40."
                ],
                [
                  "Notes",
                  "Optional free text."
                ],
                [
                  "Order Details",
                  "At least one line: Charge Type (Trucking / Lift On / Lift Off, optional), Container Size (20 or 40, required), Quantity (whole number, 1+), Selling Rate (0+), Total (0+, auto = qty × rate)."
                ],
                [
                  "Created By",
                  "The user who created the order (auto-stamped)."
                ]
              ]
            },
            {
              "heading": "Listing",
              "type": "text",
              "content": "Only the user's company orders, 30 per page, newest first. No search filters. Columns: Job Order, Tariff, Trucker, Issue Date, Container Sizes. \"Details\" pop-up: charge type, size, quantity, selling rate, total per line."
            },
            {
              "heading": "How lines are filled",
              "type": "callout",
              "style": "info",
              "content": "Every time the Tariff or the Container Sizes change, the lines are REPLACED with the tariff's selling rates (one line per charge type per size, quantity 1). Manual changes are lost at that point — pick tariff and sizes first, then edit quantities. If the tariff has no rates for those sizes: \"No charges found for the selected tariff and container sizes.\" Only the selling rate is copied; the cost stays on the tariff."
            },
            {
              "heading": "Creating & editing rules",
              "type": "table",
              "columns": [
                "Rule",
                "Message shown"
              ],
              "rows": [
                [
                  "Issue Date before tariff start",
                  "Issue date must be on or after the tariff validity from date (YYYY-MM-DD)."
                ],
                [
                  "Issue Date after tariff end",
                  "Issue date must be on or before the tariff validity to date (YYYY-MM-DD)."
                ],
                [
                  "Same charge type + size twice",
                  "Duplicate charge type: [Charge] for the same equipment [size]ft already exists."
                ]
              ]
            },
            {
              "heading": "Edit behaviour",
              "type": "callout",
              "style": "info",
              "content": "On edit, all lines are deleted and re-saved from the form."
            },
            {
              "heading": "Deleting",
              "type": "callout",
              "style": "danger",
              "content": "Asks for confirmation and deletes the order and its lines. No checks. Orders are also deleted automatically if their Tariff is deleted."
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "The Trucking Order is the written record of what was agreed with the trucker for a job and at what price. Because it copies prices from the tariff at the moment of creation, the tariff must be correct and valid on the issue date BEFORE the order is made. The most common problem is an expired tariff: the issue date is rejected until a new tariff period is created."
            }
          ]
        }
      ]
    },
    {
      "id": "accounting",
      "title": "Accounting",
      "icon": "file-text",
      "modules": [
        {
          "id": "credit-note",
          "title": "Credit Note",
          "icon": "file-text",
          "summary": "Refunds part or all of a confirmed Invoice or Debit Note — lowers what is left to collect, can credit the customer balance, and releases Storage / Detention / Power so they can be re-issued.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "A Credit Note reduces (refunds) what a customer owes. It is usually issued against a confirmed Invoice or Debit Note and gives back part or all of its charges; it can also be issued on its own for a customer. The credit note is saved in the invoice table as type C. It lowers the remaining amount to collect on the original invoice, can add the amount to the customer’s credit balance when that invoice was already paid, and releases storage / detention / power invoices so they can be recalculated and re-issued. Yard companies see Yard Credit Note instead — a separate screen, not covered here."
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
                  "Accounting → Credit Note"
                ],
                [
                  "Route (list)",
                  "creditNote.index"
                ],
                [
                  "Feature flags",
                  "accounting, credit_note"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Add Credit Note",
                  "desc": "Pick the Invoice Number — only confirmed invoices / debit notes that still have something left to refund are offered.",
                  "icon": "search"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Header Fills In",
                  "desc": "Customer, booking / B/L, ports, voyage, currency, exchange rate, VAT and the refundable charges fill automatically.",
                  "icon": "clipboard"
                },
                {
                  "step": 3,
                  "badge": "STEP 3",
                  "title": "Adjust Refund Amounts",
                  "desc": "Keep the charges to refund. Never go above what is left on each charge. Add date and notes.",
                  "icon": "calculator"
                },
                {
                  "step": 4,
                  "badge": "STEP 4 · SYSTEM CHECK",
                  "title": "Remaining Amounts Checked",
                  "tone": "system",
                  "desc": "Fixed-discount invoices must refund all remaining charges at their full remaining amounts. Status is always saved as confirmed.",
                  "icon": "activity"
                },
                {
                  "step": 5,
                  "badge": "RESULT",
                  "title": "Number Generated",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Print PDF and sync to QuickBooks if used",
                    "A newer credit note on the same charges locks this one"
                  ]
                }
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
                  "Invoice Number (parent)",
                  "Optional. The confirmed invoice or debit note being credited. Once saved it cannot be changed."
                ],
                [
                  "Booking Ref / B/L",
                  "Filled from the parent invoice. Locked after saving."
                ],
                [
                  "Load / Discharge Port, Vessel / Voyage",
                  "Filled from the invoice or its booking."
                ],
                [
                  "Customer",
                  "Required. Customers of all lines of the same agency."
                ],
                [
                  "Currency / Exchange Rate",
                  "USD, EUR and EGP are handled."
                ],
                [
                  "VAT Percentage",
                  "Default 14."
                ],
                [
                  "Discount",
                  "Copied from the invoice (read-only)."
                ],
                [
                  "Charge lines",
                  "At least one. Each line refunded from an invoice remembers which invoice line it credits."
                ],
                [
                  "Credit Note No",
                  "Generated, or used as typed if a number is entered."
                ],
                [
                  "Status",
                  "Always saved as confirmed."
                ]
              ]
            },
            {
              "heading": "Create rules",
              "type": "table",
              "columns": [
                "Rule",
                "Message"
              ],
              "rows": [
                [
                  "No charge lines",
                  "Table Cannot Be Empty"
                ],
                [
                  "No customer",
                  "Please Select Customer"
                ],
                [
                  "Total is zero",
                  "Invoice Total Amount Can not be Equal Zero"
                ],
                [
                  "Line not refundable on the parent",
                  "One or more selected charges are not refundable for this invoice."
                ],
                [
                  "Line points to another invoice’s charge",
                  "Invalid invoice charge reference for at least one line."
                ],
                [
                  "Same invoice charge twice",
                  "Duplicate invoice charge lines are not allowed."
                ],
                [
                  "Negative amount",
                  "Charge amount cannot be negative."
                ],
                [
                  "Amount above what is left",
                  "Charge amount exceeds remaining refundable amount for at least one line."
                ],
                [
                  "Fixed-discount invoice, partial refund",
                  "This invoice has a fixed discount; you must refund all remaining charges."
                ]
              ]
            },
            {
              "heading": "Credit note number",
              "type": "rules",
              "items": [
                "If a number is typed, it is used as is.",
                "MLH companies: generated from the MLH serial counters shared by the company group. CNINV = credit note on an invoice (5-digit). CNSC = credit note on a debit note (6-digit). Digit 1 = import, 2 = export (3 / 4 for MLHC).",
                "Other companies: CN + 3-digit counter + / + year, e.g. CN015 / 26 (counter in company Settings)."
              ]
            },
            {
              "heading": "Edit is locked after a newer note",
              "type": "callout",
              "style": "danger",
              "content": "A credit note cannot be edited once a newer credit note was created on the same invoice charges. The list shows a lock icon instead of Edit. Credit notes cannot be deleted from this screen. Correct mistakes with a new credit note instead of editing an older one."
            },
            {
              "heading": "What Edit still changes",
              "type": "rules",
              "items": [
                "The invoice, booking and B/L stay as they were.",
                "Charge lines are replaced and checked again. Each line may go up to its remaining amount plus what this credit note already had.",
                "VAT % and quantity are updated.",
                "Customer, date, currency, exchange rate and notes are not updated by Edit."
              ]
            },
            {
              "heading": "How this feeds other modules",
              "type": "rules",
              "items": [
                "Remaining amount to collect on an invoice is its total minus its confirmed credit notes. Receipts use that remaining amount. Fully credited invoices are shown in red.",
                "If the parent invoice is already paid, the credited amount (after VAT) is added to the customer’s credit balance in the note’s currency. Credit notes on unpaid invoices, or without an invoice, do not change the balance.",
                "A credited Storage / Detention / Power invoice (or extension) is ignored when checking whether such an invoice already exists, when the CRO letter reads the last storage invoice, and when booking calculations look for existing invoices.",
                "A booking is no longer flagged as having an unpaid invoice when that invoice is fully credited.",
                "QuickBooks: green Sync queues the credit note. The Web Connector must then run to finish."
              ]
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Credit notes directly change what customers owe, their credit balance, and whether storage / detention can be invoiced again. Always create them from the original invoice so the system can check the remaining amounts. Once a newer credit note exists on the same charges, older ones are frozen."
            }
          ]
        },
        {
          "id": "cost",
          "title": "Cost (Vendor Bills)",
          "icon": "calculator",
          "summary": "Vendor bills for what the company owes a supplier — depot storage, THC, ocean freight, trucking, DA. Totals are calculated from charge lines and container rates, not stored.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "This is where the company records what it owes a supplier — depot storage, terminal THC, ocean freight, trucking, DA and the rest. It is a vendor bill, not a customer invoice. The list button says Add Vendor Bill for that reason. A Cost has a header (who billed us, which bill number, which dates, which currency) and one or more charge lines taken from that supplier’s charge-item catalogue. Each line can then be broken down onto real BLs, bookings or container numbers, with a rate per box and, for storage, a quantity of days. Nothing here posts to QuickBooks. The QB columns on a charge line are labels copied from the supplier catalogue so accountants can recognise the item later."
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
                  "Accounting → Cost"
                ],
                [
                  "Route (list)",
                  "cost.index → /cost"
                ],
                [
                  "Feature flags",
                  "costs"
                ],
                [
                  "Permissions",
                  "Cost-List, Cost-Create, Cost-Show, Cost-Edit, Cost-Delete, plus Cost-Store on save"
                ],
                [
                  "Delete",
                  "Soft-delete. The bill, charge lines, container links and attachment file are removed, but the row stays in the table."
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Add Vendor Bill",
                  "desc": "Pick Supplier Type, then Supplier. Pick Invoice Type(s) and Operation Date (ATB) so the charge catalogue can load.",
                  "icon": "search"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Add Charge Lines",
                  "desc": "Pick matching Charge Items. Set Qty, Unit Rate and VAT. Optionally open BL to hang the cost on real boxes.",
                  "icon": "clipboard"
                },
                {
                  "step": 3,
                  "badge": "STEP 3",
                  "title": "Set Bill Header",
                  "desc": "Bill Number, Invoice Date and Payment Status (defaults to UnPaid). Currency is forced to USD.",
                  "icon": "calculator"
                },
                {
                  "step": 4,
                  "badge": "STEP 4 · DECISION",
                  "title": "On the List",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Filter and read totals",
                    "Click UnPaid to mark Paid",
                    "Show / Edit / Delete",
                    "Eye on a BL/Booking ref for a cost summary"
                  ]
                },
                {
                  "step": 5,
                  "badge": "RESULT",
                  "title": "Payable Is Recorded",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "List Total USD / Total EGP is calculated from lines and container rates",
                    "Trust the list / Show screen, not the Create header, when a line has individual storage days"
                  ]
                }
              ]
            },
            {
              "heading": "Header fields",
              "type": "table",
              "columns": [
                "Field",
                "Meaning"
              ],
              "rows": [
                [
                  "Supplier Type",
                  "Depot, Services Provider, Seller, Trucker, Lessor, Haulage, Terminal or Other. Locked on Edit."
                ],
                [
                  "Supplier",
                  "Must belong to this company and carry that type. The Name list is empty until Type is chosen. Copies Country onto the header."
                ],
                [
                  "Invoice Type",
                  "Multi-select: Storage, General, THC, Ocean Freight, DA. This is what filters the charge catalogue."
                ],
                [
                  "Bill Number",
                  "Free text, required. No uniqueness check — two bills can share INV0001."
                ],
                [
                  "Operation Date From (ATB)",
                  "Required on save even though the create form does not mark it with a star. The catalogue will not load without it."
                ],
                [
                  "Operation Date To (ATD)",
                  "Optional."
                ],
                [
                  "Invoice Date",
                  "The supplier’s invoice date. Required. Used by the list date filter and the Cross-company 1-month cap."
                ],
                [
                  "Shipment Type",
                  "EXPORT / IMPORT / TRANSHIPMENT / ALL. Optional. Filters the voyage list and the charge catalogue."
                ],
                [
                  "Vessel / Voyage",
                  "Optional multi-select. Filters the BL / Booking picker."
                ],
                [
                  "Currency / Conversion",
                  "Currency is forced to USD. Conversion Same or USD → EGP. Exchange Rate is required, default 1."
                ],
                [
                  "Payment Status",
                  "Paid / UnPaid / Dispute. Defaults to UnPaid. The list’s red UnPaid badge flips to Paid without opening Edit."
                ],
                [
                  "Attach File",
                  "pdf, jpg, jpeg, png, xlsx, xls, max 10 MB. Replacing it on Edit deletes the old file."
                ]
              ]
            },
            {
              "heading": "Charge lines and container links",
              "type": "rules",
              "items": [
                "Charge Item comes from Master Data → Supplier Charge Items for this company, this supplier, the selected Invoice Type(s), valid on the Operation Date.",
                "Qty ≥ 1 and Unit Rate ≥ 0. Used as the fallback total when the line has no per-container rates.",
                "VAT tick adds 14%. There is no company-level VAT rate.",
                "The same charge item can be added more than once so two payers can share a bill.",
                "Each charge row’s BL button opens a modal: confirmed Export BL Drafts / Service BLs, Import bookings (confirmed or summary), or — on Create only — pasted direct container numbers.",
                "Rate modes: General (one unit_rate for every selected box) or Individual (each box gets its own unit_rate and unit_qty / storage days).",
                "On Edit, saving a line deletes every old container link for that line and writes the modal contents again. An empty allocation wipes the previous one."
              ]
            },
            {
              "heading": "What appears in the charge picker",
              "type": "callout",
              "style": "warning",
              "content": "The Select Charge Items box stays empty until Supplier, Invoice Type and Operation Date are all set. Transhipment shipment type excludes All catalogue items on purpose. Changing Supplier after adding lines will reject those lines on save — the charge item must belong to the header supplier. Change the supplier first, then re-add the lines."
            },
            {
              "heading": "How the total is calculated",
              "type": "rules",
              "items": [
                "If any linked container has unit_rate > 0: sum unit_rate × (unit_qty or 1) per box, then × 1.14 if VAT is on.",
                "Otherwise: qty × unit_rate, then × 1.14 if VAT is on.",
                "The Create/Edit running total uses the simpler qty × unit_rate × 1.14 and does not see per-box days. Trust the list / Show screen after save.",
                "USD + Same shows Total USD only. USD + USD → EGP fills both columns (EGP = USD × rate). A zero column is shown as a dash.",
                "store does not write a total. update computes one but total_amount is not fillable, so that write is thrown away. Both paths rely on the accessor.",
                "The BL / Booking summary (eye next to the filter) is company-scoped only — Cross on the list does not widen that popup."
              ]
            },
            {
              "heading": "The Cost list",
              "type": "rules",
              "items": [
                "30 per page, newest first. Default scope is the logged-in company.",
                "Filters: Supplier, Bill Number, Invoice Type (DA is missing from the list filter), Shipment Type, Invoice Date, Operation Date, Payment Status, Charge Description, Voyage, BL / Booking Ref, Container No.",
                "Cross includes every company the user can switch to. Invoice Date From/To then cannot exceed one month.",
                "Export All Bills and Summary honour Cross and the 1-month cap.",
                "The mark-as-Paid click on the list has no permission check of its own. Anyone who can load the list and hit the badge can flip UnPaid → Paid. There is no click-path from Paid back to UnPaid except Edit."
              ]
            },
            {
              "heading": "Create vs Edit traps",
              "type": "table",
              "columns": [
                "Trap",
                "What happens"
              ],
              "rows": [
                [
                  "Supplier Type frozen",
                  "The name can change to another supplier of the same type. Country stays the supplier’s country."
                ],
                [
                  "Currency hardcoded USD on Edit",
                  "Saving an old EGP bill silently rewrites it to USD. The exchange rate is kept."
                ],
                [
                  "Direct-container paste is Create only",
                  "Edit can still change a line that was saved that way, but cannot start a new type-the-numbers allocation."
                ],
                [
                  "Empty BL modal wipes allocation",
                  "Confirming the modal with nothing selected deletes the previous container links."
                ],
                [
                  "DA bills hide under the list filter",
                  "DA is on Create/Edit. The list filter does not offer it, so a DA-only bill disappears if Invoice Type is filtered to the four listed values."
                ]
              ]
            },
            {
              "heading": "Common problems",
              "type": "table",
              "columns": [
                "Problem",
                "Fix"
              ],
              "rows": [
                [
                  "Charge picker is empty",
                  "Set Supplier + Invoice Type + Operation Date first. Then check the supplier catalogue’s invoice type, shipment type and validity window."
                ],
                [
                  "Save says Operation Date is invalid",
                  "Fill Operation Date From. The form does not mark ATB with a star, but the server requires it."
                ],
                [
                  "Charge item rejected on save",
                  "The line must belong to the header supplier. Change the supplier first, then re-add the lines."
                ],
                [
                  "Supplier list empty after picking a type",
                  "Master Data → Suppliers: set the type flags and company."
                ],
                [
                  "Create total does not match the list",
                  "You entered per-container rates or storage days. Open Show, or trust the list."
                ],
                [
                  "BL / Booking picker missing a known ref",
                  "Export wants a confirmed BL Draft or Service BL. Import wants a confirmed or summary booking. Cap 500. Clear voyage / routing filters."
                ],
                [
                  "Cross drops Invoice Date To",
                  "The range is longer than one month. Shorten it, or turn Cross off."
                ],
                [
                  "Cannot un-pay from the list",
                  "Only UnPaid is clickable, and only to Paid. Edit the bill to change Payment Status."
                ]
              ]
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Cost is the payable side of the same shipment the Invoice List bills the customer for. Set Supplier, Invoice Type and Operation Date before touching the charge list. If the charge is per box or per storage day, put the rate on the containers — do not trust the Qty × Rate box at the top of Create. Payment Status is a flag you own: the list will let anyone mark Paid, and nothing here talks to the bank or to QuickBooks. The bill number is yours to keep unique. The total is calculated — if it disagrees with the supplier PDF, look at the allocation on the charge lines."
            }
          ]
        }
      ]
    },
    {
      "id": "custody",
      "title": "Custody",
      "icon": "briefcase",
      "modules": [
        {
          "id": "custody-issues",
          "title": "Issues Custody",
          "icon": "briefcase",
          "summary": "Cash advances and petty-cash funds issued to employees — the outflow log that keeps treasury money accountable by person and currency.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "The Issues Custody screen records financial custody (cash advances, petty cash funds, or operational expenses) issued by the company to employees. When an employee receives cash from the treasury or safe for company-related disbursements, field operations or advance expense coverage, that transaction is registered here. This is the primary log for cash outflows handed over to individual staff members."
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
                  "Custody → Issues"
                ],
                [
                  "Route (list)",
                  "custodies.index with type parameter issue"
                ],
                [
                  "Feature flags",
                  "custody"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Issues",
                  "desc": "Sidebar → Custody → Issues. The list is latest first, 30 per page.",
                  "icon": "briefcase"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Create or Filter",
                  "desc": "Search by employee (type at least 3 characters) and/or exact creation date. Header badges show live totals per currency.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3",
                  "title": "Enter the Issue",
                  "desc": "Pick Employee, Currency and Amount. Remarks are optional.",
                  "icon": "clipboard"
                },
                {
                  "step": 4,
                  "badge": "STEP 4 · SYSTEM CHECK",
                  "title": "Stored as Type Issue",
                  "tone": "system",
                  "desc": "The system automatically assigns type = 0 so the record stays on the Issues side.",
                  "icon": "activity"
                },
                {
                  "step": 5,
                  "badge": "RESULT",
                  "title": "Cash Is Accountable",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Currency totals in the header recalculate with the filters",
                    "Receiving later balances this outflow"
                  ]
                }
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
                  "Employee",
                  "Required. Active user receiving the custody."
                ],
                [
                  "Currency",
                  "Required. Active currency from master data."
                ],
                [
                  "Amount",
                  "Required numeric value, minimum 0, step 0.01."
                ],
                [
                  "Remarks",
                  "Optional. Purpose of the issue, e.g. cash advance for port customs inspection expenses."
                ],
                [
                  "Date",
                  "System-generated creation date (YYYY-MM-DD)."
                ],
                [
                  "Type",
                  "Internal. Stored as 0 = Issue. Assigned from the screen context."
                ]
              ]
            },
            {
              "heading": "Currency totals",
              "type": "text",
              "content": "At the top right of the header the system shows live sum badges for every currency in the current filtered list, for example Total USD: 1,500.00. Formula: SUM(amount) grouped by currency for matching issue records. The badges recalculate whenever search filters are applied or cleared."
            },
            {
              "heading": "Listing & remarks",
              "type": "rules",
              "items": [
                "Employee filter is a multi-select autocomplete (TomSelect, at least 3 characters).",
                "Date filter matches the exact creation date.",
                "Search applies the filters; Reset returns to the full issue list.",
                "A remark longer than 50 characters is hidden behind an eye icon. Clicking it opens a popup with the full text."
              ]
            },
            {
              "heading": "Create, edit & delete",
              "type": "rules",
              "items": [
                "Employee must exist in Users. Currency must exist and be active.",
                "Amount must be numeric and >= 0. Remarks are optional.",
                "Success: Custody record created/updated successfully.",
                "Delete asks Are you sure you want to delete this Custody Record? and then permanently removes the row."
              ]
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Custody Issues are cash liabilities outstanding with company employees. If issues are omitted or entered with the wrong amount or currency, petty cash will fail to reconcile and employee expense settlements cannot be verified."
            }
          ]
        },
        {
          "id": "custody-receiving",
          "title": "Receiving Custody",
          "icon": "briefcase",
          "summary": "Cash returned or collected by employees back into the treasury — the inflow log that balances Issues Custody.",
          "sections": [
            {
              "heading": "What is this screen?",
              "type": "text",
              "content": "The Receiving Custody screen records financial custody received or returned to the company by employees. When an employee returns unused cash advance funds, settles a petty cash balance, or hands over cash collected on behalf of the company into the treasury/safe, that transaction is registered here. This is the central log for cash inflows received from staff."
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
                  "Custody → Receiving"
                ],
                [
                  "Route (list)",
                  "custodies.index with type parameter receiving"
                ],
                [
                  "Feature flags",
                  "custody"
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open Receiving",
                  "desc": "Sidebar → Custody → Receiving. Latest first, 30 per page.",
                  "icon": "briefcase"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Create or Filter",
                  "desc": "Search by employee and/or exact creation date. Header badges show live totals per currency for receiving records only.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3",
                  "title": "Enter the Return",
                  "desc": "Pick Employee, Currency and Amount. Remarks can describe the settlement.",
                  "icon": "clipboard"
                },
                {
                  "step": 4,
                  "badge": "STEP 4 · SYSTEM CHECK",
                  "title": "Stored as Type Receiving",
                  "tone": "system",
                  "desc": "The system automatically assigns type = 1 so the record stays on the Receiving side.",
                  "icon": "activity"
                },
                {
                  "step": 5,
                  "badge": "RESULT",
                  "title": "Liability Comes Down",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Returned funds have an audit trail in the safe",
                    "Employee cash liability is no longer overstated"
                  ]
                }
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
                  "Employee",
                  "Required. Active user returning or settling the custody."
                ],
                [
                  "Currency",
                  "Required. Active currency of the received funds."
                ],
                [
                  "Amount",
                  "Required numeric value, minimum 0, step 0.01."
                ],
                [
                  "Remarks",
                  "Optional. Settlement details, e.g. return of unused travel cash advance."
                ],
                [
                  "Date",
                  "System-generated creation date (YYYY-MM-DD)."
                ],
                [
                  "Type",
                  "Internal. Stored as 1 = Receiving. Assigned from the screen context."
                ]
              ]
            },
            {
              "heading": "Same list behaviour as Issues",
              "type": "rules",
              "items": [
                "Currency totals are SUM(amount) grouped by currency for matching receiving records only.",
                "Employee search needs at least 3 characters. Date matches the exact creation date.",
                "Long remarks (over 50 characters) open in an eye-icon popup.",
                "Create/Edit validation matches Issues. Delete permanently removes the row after confirmation.",
                "The two screens share the same table and route; only the type parameter (issue vs receiving) changes which rows and which type is written."
              ]
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Receiving Custody balances out Custody Issues by logging cash re-entering company accounts. Without accurate receiving records, employee cash liability stays overstated and returned funds in the safe lack an audit trail."
            }
          ]
        }
      ]
    },
    {
      "id": "integration",
      "title": "Integration",
      "icon": "activity",
      "modules": [
        {
          "id": "nafeza-ucr",
          "title": "Nafeza (UCR)",
          "icon": "activity",
          "summary": "Egyptian customs export chain hanging off the Export Booking — paste a 19-digit UCR, then report booking confirmation, empty containers, draft/final BOL and the export manifest.",
          "sections": [
            {
              "heading": "What is this integration?",
              "type": "text",
              "content": "Egyptian customs (Nafeza) require every export shipment to be declared before it moves, and the shipping line to report each milestone against a single customs reference: the UCR, a 19-digit number. We do not create the UCR — the exporter or broker gets it from Nafeza. Our job is to paste it onto the Export Booking, prove the booking matches their declaration, and report each milestone: booking confirmed, empty containers picked up, draft BOL, final BOL, and finally the export manifest. Nothing here is a screen you manage. The single most common reason it fails is wrong master data (customer tax card, vessel IMO, port codes, voyage dates), not the integration itself."
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
                  "Sidebar entry",
                  "None. Lives inside screens you already use."
                ],
                [
                  "Export Booking",
                  "UCR field and the Check UCR status badge"
                ],
                [
                  "BL Draft",
                  "Draft Sync / Final Sync / Retry buttons"
                ],
                [
                  "Export Cuscar",
                  "Submit to Nafeza button"
                ],
                [
                  "Where it appears",
                  "Export Booking, BL Draft and Export Cuscar — there is no separate Nafeza menu."
                ],
                [
                  "Master switch",
                  "Nafeza (UCR) must be switched on for the company. When off, the UCR column, sync buttons and every Nafeza action are disabled."
                ],
                [
                  "Audit trail",
                  "The daily Nafeza log — that log, not the badge, is what really happened. Ask support if you need a copy."
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Paste the UCR",
                  "desc": "Get the 19-digit UCR from the exporter and type it on the Export Booking.",
                  "icon": "clipboard"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Save as Confirmed",
                  "desc": "Auto-verifies the UCR with Nafeza and sends the Booking Confirmation. Read the Check UCR badge.",
                  "icon": "activity"
                },
                {
                  "step": 3,
                  "badge": "STEP 3",
                  "title": "Draft Sync",
                  "desc": "Create the BL Draft and press Draft Sync on the BL Draft list.",
                  "icon": "file-text"
                },
                {
                  "step": 4,
                  "badge": "STEP 4",
                  "title": "Final Sync",
                  "desc": "After departure press Final Sync on the BL Draft.",
                  "icon": "anchor"
                },
                {
                  "step": 5,
                  "badge": "RESULT",
                  "title": "Submit Export CUSCAR",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Generate the Export CUSCAR, then Submit to Nafeza",
                    "Linked bookings move to Manifest Uploaded"
                  ]
                }
              ]
            },
            {
              "heading": "Fields that drive the chain",
              "type": "table",
              "columns": [
                "Field",
                "Meaning"
              ],
              "rows": [
                [
                  "UCR",
                  "19-digit customs reference. Optional on the form, but nothing Nafeza-related happens without it. Rejected unless exactly 19 digits."
                ],
                [
                  "Nafeza Status",
                  "System-written after each call. Shown as the Check UCR badge."
                ],
                [
                  "Last Synced At",
                  "Stamped every time status changes — including when a call fails. Means last time we tried, not last success."
                ],
                [
                  "Idempotency Key",
                  "One-time key overwritten on every submission. Protects a double-click, not a re-submit tomorrow."
                ],
                [
                  "Exportal ID",
                  "9-digit exporter tax ID. Not on the Export Booking form and almost always empty — in practice the customer’s Tax Card is used."
                ],
                [
                  "Customer Tax Card",
                  "The single most important field in this integration. Must be exactly 9 digits. A blank one is the number-one live failure."
                ]
              ]
            },
            {
              "heading": "UCR verification",
              "type": "rules",
              "items": [
                "Verification is read-only: does this declaration exist, and may I book against it? It changes nothing on Nafeza’s side.",
                "A successful verification does NOT mean the UCR is usable. Success only means Nafeza answered. The booking advances to UCR Verified only when Booking Eligible = Yes.",
                "If verification fails during create or update, the booking is still saved. The user only gets a warning — a booking can exist with Nafeza Status = Error.",
                "Once the badge reads Booking Confirmed, later edits skip both verification and milestones. You cannot cancel a confirmed booking by editing it — use the explicit cancel action.",
                "An export booking with no UCR saved as Confirmed is marked UCR Verified anyway. Treat that as meaningless.",
                "A failed cancellation leaves the badge on Booking Confirmed and does not write Error."
              ]
            },
            {
              "heading": "Status lifecycle",
              "type": "table",
              "columns": [
                "Status",
                "Meaning"
              ],
              "rows": [
                [
                  "(blank) / Not Started",
                  "Every new booking. Nothing writes Pending, so the badge shows a dash."
                ],
                [
                  "verified",
                  "UCR Verified — Booking Eligible = Yes, or a no-UCR confirmed booking (trap)."
                ],
                [
                  "confirmed",
                  "Booking Confirmation accepted. Later edits then do nothing."
                ],
                [
                  "cancelled",
                  "Booking Cancellation accepted."
                ],
                [
                  "empty_sent",
                  "Empty-container milestone accepted. Almost never happens in practice."
                ],
                [
                  "draft_bol / final_bol",
                  "Draft Sync / Final Sync on the BL Draft list succeeded."
                ],
                [
                  "manifest_sent",
                  "Export CUSCAR accepted by Nafeza."
                ],
                [
                  "error",
                  "Verification or confirmation failed. A failed cancellation does not set this."
                ]
              ]
            },
            {
              "heading": "Silent defaults on milestones",
              "type": "callout",
              "style": "warning",
              "content": "A missing commodity description becomes General Cargo, a missing HS code becomes 000000, and missing dates fall back to today or a calculated date. A submission can be accepted by Nafeza while carrying a placeholder that is legally wrong. Fill commodity, HS code and dates properly."
            },
            {
              "heading": "Export CUSCAR and the UCR",
              "type": "rules",
              "items": [
                "Generating the file: UCR is optional. If the booking has no UCR the segment is left out and the file still downloads.",
                "Submitting to Nafeza: every BL is supposed to have a valid 19-digit UCR.",
                "The pre-flight check only flags a UCR that is present but the wrong length. An empty UCR or nineteen zeroes is excluded from the check and can pass through.",
                "Nothing forces the booking to have reached Booking Confirmed, Draft BOL or Final BOL before the manifest is uploaded."
              ]
            },
            {
              "heading": "Common problems",
              "type": "table",
              "columns": [
                "Problem",
                "Fix"
              ],
              "rows": [
                [
                  "Missing / invalid customer tax card",
                  "Master Data → Customers: set the exporter’s 9-digit Egyptian tax ID, then retry. One bad customer fails every booking that uses it."
                ],
                [
                  "Loading date in the past",
                  "Correct ETD/ETA on Voyage Ports for that load port, then retry."
                ],
                [
                  "Booking reference already taken",
                  "Nafeza already tied this UCR to a different booking ref. The customer must update the declaration to the new booking ref."
                ],
                [
                  "UCR already used (405)",
                  "A UCR belongs to exactly one booking. Remove the duplicate. Do not retry until it is gone."
                ],
                [
                  "Declaration already finalised",
                  "Stop retrying. Continue with the next legitimate step or ask the exporter for a new declaration."
                ],
                [
                  "Wrong declarant / shipper",
                  "Correct the customer’s Tax Card so it matches the exporter on the declaration. Never substitute Importer ID."
                ],
                [
                  "Missing gross weight / vessel IMO",
                  "Fill booking container gross weight; set IMO and flag country on the Vessel; link vessel and carrier on the voyage."
                ],
                [
                  "No booking at Nafeza yet",
                  "A later milestone was sent before Booking Confirmation was accepted. Get Booking Confirmed first."
                ],
                [
                  "Authentication / timeout",
                  "Credentials or Nafeza/network problem. Retrying the booking will not fix a missing access_token."
                ]
              ]
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Without an accepted Nafeza chain the cargo does not legally leave Egypt. The badge on the Export Booking list is a compliance indicator — anything showing Failed needs someone to open the Nafeza log. Almost all confirmation failures trace back to five records: the customer’s 9-digit Tax Card, the voyage’s dates at the load port, a booking ref renamed after confirmation, a UCR used twice, and the vessel’s IMO. If the UCR is already consumed, the declaration is finalised, or the token request is refused, retries will not help."
            }
          ]
        },
        {
          "id": "nafeza-aci",
          "title": "Nafeza (ACI Check)",
          "icon": "activity",
          "summary": "Read-only Import ACID verification hanging off the Import BL List — asks Nafeza whether each 19-digit ACID is still valid for the importer, exporter, vessel and booking on file.",
          "sections": [
            {
              "heading": "What is this integration?",
              "type": "text",
              "content": "Egyptian customs (Nafeza) require every import shipment to carry an ACID — Advanced Cargo Information — before the cargo can be declared. The ACID is a 19-digit number the importer or broker gets from Nafeza. We do not create it. Our job is to paste it onto the Import Booking and ask Nafeza, in a batch, whether each ACID is still valid for the importer, exporter, vessel and booking we have on file. This is a read-only question. A green tick only means Nafeza answered Yes, with an expiry date. It does not submit a manifest and does not replace Import CUSCAR. The single most common reason it fails is wrong master data (importer tax ID, exporter ID, vessel IMO, load port code), not the integration itself."
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
                  "Sidebar entry",
                  "None. Lives on Booking → Import BL List: the ACID Check column and the clipboard-check button once rows are selected."
                ],
                [
                  "Routes",
                  "POST /booking/check-aci and GET /booking/voyage-aci-stats"
                ],
                [
                  "Master switch",
                  "System lock nafeza_aci_check_enabled (Check ACID), off by default. Super-admin toggles it from Sidebar → Lock."
                ],
                [
                  "Not the UCR switch",
                  "Turning on Export UCR / Nafeza does not turn ACI Check on. They are separate switches."
                ],
                [
                  "Audit trail",
                  "Daily application log, entries prefixed ACI Check — that log, not the icon, is what really happened."
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Paste the ACID",
                  "desc": "Get the 19-digit ACID from the importer. Type it on the Import Booking with the Exporter ID, then save.",
                  "icon": "clipboard"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Open Import BL List",
                  "desc": "Tick the booking(s), or Select All across pages.",
                  "icon": "search"
                },
                {
                  "step": 3,
                  "badge": "STEP 3",
                  "title": "Press Check ACI",
                  "desc": "The clipboard-check button in the Actions header. Confirm Check ACI? The check is never automatic — create/edit does not call Nafeza.",
                  "icon": "activity"
                },
                {
                  "step": 4,
                  "badge": "STEP 4 · SYSTEM CHECK",
                  "title": "Read the Icon",
                  "tone": "system",
                  "desc": "Green tick = Valid with expiry. Red cross = Failed. Dash = no ACID or never checked.",
                  "icon": "hash"
                },
                {
                  "step": 5,
                  "badge": "RESULT",
                  "title": "Download Failures if Needed",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "Failed ACIs Excel is offered from the flash message",
                    "Already-valid rows stay green unless someone posts recheck_all=1"
                  ]
                }
              ]
            },
            {
              "heading": "Fields that drive the check",
              "type": "table",
              "columns": [
                "Field",
                "Meaning"
              ],
              "rows": [
                [
                  "ACID",
                  "19-digit import customs reference. Required on Import Booking. Also arrives from Manifest / EDI CUSCAR upload. Without it the check silently skips the row."
                ],
                [
                  "Importer ID",
                  "Egyptian importer’s 9-digit tax ID, sent as EgyptianImporterVATNumber. The Create/Edit Importer ID box is currently hidden, so a hand-created booking often has this empty."
                ],
                [
                  "Exporter ID",
                  "Foreign exporter’s registration number (booking.exportal_id). Required on the form; if empty the service substitutes the word Unknown."
                ],
                [
                  "ACI Check",
                  "Written by the system. Blank means never checked; otherwise Failed or Valid."
                ],
                [
                  "ACI Valid Date",
                  "Nafeza’s expiry date, stored only when Valid. Cleared whenever the check fails."
                ]
              ]
            },
            {
              "heading": "A successful HTTP 200 is not a usable ACID",
              "type": "callout",
              "style": "warning",
              "content": "Success only means Nafeza answered. A booking can come back 200 with IsValid = false, and the icon turns red. Import CUSCAR already refuses anything that is not 19 digits; ACI Check does not repeat that check — it will send whatever is in booking.acid, including a short value, letters, or nineteen zeroes."
            },
            {
              "heading": "Status traps",
              "type": "rules",
              "items": [
                "Importer ID is often empty on hand-created bookings. The service then pads nothing to 000000000. Manifest upload fills importer_id from the first 9 digits of the ACID — that is the value you want.",
                "A dash is ambiguous: no ACID, or an ACID that nobody has pressed Check on yet. Look at the ACID field on the booking first.",
                "Green is sticky from the list. The Check ACI button never sends recheck_all, so a booking that once passed is not sent again — even if the declaration later expires.",
                "A failed batch still marks every row in that chunk as Failed, including ones that might have been Valid a minute earlier.",
                "UCR is export. ACID is import. They share the same client ID / secret / base URL, but different OAuth scopes (aci.verify_before_shipment) and different enable switches."
              ]
            },
            {
              "heading": "Silent defaults — a green tick can be legally wrong",
              "type": "table",
              "columns": [
                "Missing data",
                "What is sent"
              ],
              "rows": [
                [
                  "Load port / port country",
                  "TRIST (Istanbul) / TR"
                ],
                [
                  "Vessel / IMO",
                  "Unknown Vessel / 9999999"
                ],
                [
                  "Exporter country / exportal_id",
                  "AE (UAE) / Unknown"
                ],
                [
                  "Importer ID",
                  "000000000"
                ],
                [
                  "Company on user",
                  "MSCU / Mediterranean Shipping Company"
                ]
              ]
            },
            {
              "heading": "How the list button actually runs",
              "type": "rules",
              "items": [
                "Selected rows post booking IDs remembered across pages. Select All re-runs the Import BL List query, including Cross when that filter is on.",
                "Many bookings are grouped by (second voyage or first voyage) + load port, then chunked into batches of 50. One OAuth token for the whole run.",
                "Bookings without an ACID are dropped before anything is sent. They do not appear in the failed Excel.",
                "Already-valid bookings are dropped unless recheck_all=1. The list button does not send that flag.",
                "The service always restricts to the logged-in user’s company. Sister-company IDs collected by Cross are silently ignored.",
                "Failures are written to failed_acis_YYYY-MM-DD_His.xlsx. The ACID column is forced to text so Excel does not swallow leading zeroes."
              ]
            },
            {
              "heading": "Common problems",
              "type": "table",
              "columns": [
                "Problem",
                "Fix"
              ],
              "rows": [
                [
                  "Importer VAT sent as nine zeroes",
                  "Put the first 9 digits of the ACID into Importer ID (or re-upload the manifest), then Check ACI again."
                ],
                [
                  "Exporter sent as Unknown / country AE",
                  "Fill Exporter ID on the booking and set the shipper customer’s Country in Master Data."
                ],
                [
                  "Vessel sent as IMO 9999999",
                  "Link a vessel to the voyage and set a 7-digit IMO on the Vessel master."
                ],
                [
                  "Load port sent as TRIST",
                  "Set the load port. The code we send is country prefix + first 3 characters of the port code."
                ],
                [
                  "Booking reference does not match",
                  "We strip a trailing -1 / -2 / -3. The ref on our side must be the one on the declaration, minus only a numeric split suffix."
                ],
                [
                  "No ACID on the booking",
                  "Type the 19-digit ACID first. Select All quietly skips the row."
                ],
                [
                  "Green icon but the declaration has expired",
                  "Needs a request with recheck_all=1. The list button will not re-ask on its own."
                ],
                [
                  "Authentication failed",
                  "Credentials / ACI verify scope — not a booking-data problem. Same env keys as UCR; a working UCR setup can still fail here."
                ],
                [
                  "Batch timeout marks the whole chunk Failed",
                  "Retry later. A timeout also clears expiry dates on rows that were Valid before this run."
                ],
                [
                  "Cross-company rows silently skipped",
                  "Run the check while logged in as each company, or turn Cross off."
                ],
                [
                  "Check ACID is currently disabled",
                  "Super-admin turns Check ACID on under Sidebar → Lock. This is not the same switch as Export UCR / Nafeza."
                ]
              ]
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "Without a valid ACID the import does not legally enter Egypt. Import CUSCAR already refuses a missing or non-19-digit ACID on Egypt-bound full containers. The icon on the Import BL List is a compliance indicator — a red cross needs someone to open the failed Excel or ask support for the application log. Almost every failure traces back to five records: the importer’s 9-digit tax ID (often empty on hand-created bookings), the exporter ID and country, the vessel’s IMO, the load-port code, and the booking reference. If the token is refused, the lock is off, or the row has no ACID, retries will not help."
            }
          ]
        },
        {
          "id": "quickbooks",
          "title": "QuickBooks Desktop Sync",
          "icon": "database",
          "summary": "Queues invoices, credit notes, yard invoices and receipts so QuickBooks Web Connector can pull them into QuickBooks Desktop — Sync does not push anything itself.",
          "sections": [
            {
              "heading": "What is this integration?",
              "type": "text",
              "content": "Accounting is kept in QuickBooks Desktop, which sits on an office PC and has no public API. Invoices, credit notes, yard invoices and receipts are entered in this system and then copied into QuickBooks so accountants do not re-type them. The direction matters: this system does not push anything to QuickBooks. QuickBooks Web Connector (QBWC) runs next to QuickBooks and PULLS from us on a schedule. Pressing Sync only queues the record. Nothing reaches QuickBooks until the Web Connector runs on that PC."
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
                  "QB Sync Monitor",
                  "Accounting → QB Sync Monitor. Visible when QuickBooks sync is enabled for the company."
                ],
                [
                  "QB Accounts",
                  "Accounting → QB Accounts. Visible when the QB Accounts feature is enabled."
                ],
                [
                  "Sync buttons",
                  "On Invoices (including credit notes), Receipts and Yard Invoices — not on a screen of their own."
                ],
                [
                  "Web Connector",
                  "QuickBooks Web Connector on the office PC pulls from this system on a schedule. Sync only queues the record."
                ]
              ]
            },
            {
              "heading": "User flow",
              "type": "flow",
              "steps": [
                {
                  "step": 1,
                  "badge": "STEP 1",
                  "title": "Open the Record",
                  "desc": "Invoice, credit note, yard invoice or receipt.",
                  "icon": "file-text"
                },
                {
                  "step": 2,
                  "badge": "STEP 2",
                  "title": "Press Sync",
                  "desc": "The badge turns Pending. Nothing has been sent yet — the record is only queued.",
                  "icon": "clipboard"
                },
                {
                  "step": 3,
                  "badge": "STEP 3 · SYSTEM CHECK",
                  "title": "Web Connector Drains the Queue",
                  "tone": "system",
                  "desc": "The Web Connector on the accounts PC signs in, pulls one request at a time, and posts the answer back.",
                  "icon": "activity"
                },
                {
                  "step": 4,
                  "badge": "STEP 4 · DECISION",
                  "title": "Read the Badge",
                  "tone": "decision",
                  "icon": "hash",
                  "actions": [
                    "Synced",
                    "Failed → open QB Sync Monitor",
                    "Resync after fixing data"
                  ]
                },
                {
                  "step": 5,
                  "badge": "RESULT",
                  "title": "Books Updated",
                  "tone": "result",
                  "icon": "info",
                  "outcomes": [
                    "QuickBooks transaction ID is stored on success",
                    "Receipts stay last in the queue so the invoice exists first"
                  ]
                }
              ]
            },
            {
              "heading": "How the pipe works",
              "type": "rules",
              "items": [
                "The Connector username carries the company code as a suffix (for example QBIntegeration_NMD). We answer with a session ticket and the QuickBooks company FILE path for that code.",
                "One record takes many round trips. An invoice walks customer → items → accounts → class → ship method → sales rep → AR account → create/update invoice, skipping steps already known.",
                "Queue order: regular invoices, then credit memos, then yard invoices, then receipts. Receipts are last because a payment cannot be posted before its invoice exists in QuickBooks.",
                "Customers, service items, accounts, classes, shipping methods, sales reps and foreign-currency receivable accounts are created automatically only when genuinely missing.",
                "A full QuickBooks path item (for example CPI Import:CPI - Others Imp) cannot be auto-created. Those sub-items must already exist under that exact FullName.",
                "Customer names are built as TaxID-Currency-CustomerName and truncated to 41 characters, so the same real customer appears once per currency."
              ]
            },
            {
              "heading": "Statuses",
              "type": "table",
              "columns": [
                "Place",
                "Values"
              ],
              "rows": [
                [
                  "Queue",
                  "pending, queued (legacy), processing, completed, failed"
                ],
                [
                  "Record badge",
                  "pending, synced or failed, plus the QuickBooks transaction ID and sync time on success"
                ],
                [
                  "Status-polling trap",
                  "A FAILED queue item is reported as completed with an error attached. Completed here means stop polling, not succeeded. Judge success by the error and the badge."
                ],
                [
                  "Retries",
                  "Nothing retries on its own. Failed records stay failed until a person presses Resync, or support re-queues them."
                ]
              ]
            },
            {
              "heading": "QB Sync Monitor",
              "type": "rules",
              "items": [
                "Company-code selector at the top (defaults to MLHE) — each QuickBooks company file is a separate world.",
                "Overview: mapped invoices/customers/payments, queue counts, today’s log and error totals.",
                "Queue: 20 per page, newest first, filterable by entity, status and date. Shows step reached, attempt count, error, and who pressed Sync.",
                "Mappings: link table between our records and QuickBooks IDs, exportable to CSV.",
                "Logs: every exchange with QuickBooks, with request, response, status and duration.",
                "Retry rebuilds a clean starting state rather than resuming mid-ladder. Clear Failed DELETES the failed rows — read the errors first."
              ]
            },
            {
              "heading": "The four things that can be synced",
              "type": "table",
              "columns": [
                "Record",
                "Rule"
              ],
              "rows": [
                [
                  "Invoices",
                  "Full ladder. Zero-value lines are skipped. An invoice with no positive line is rejected."
                ],
                [
                  "Credit notes",
                  "Only records marked as credit notes. Weaker duplicate protection — a careless resync can create a duplicate credit memo in QuickBooks."
                ],
                [
                  "Yard invoices",
                  "Always EGP. Amount is the base EGP total — not the VAT-inclusive total. Zero base amount is refused."
                ],
                [
                  "Receipts",
                  "Refused until every linked invoice is already synced. Payment is applied only up to each invoice’s remaining QuickBooks balance. Over/under-payment is handled, not rejected."
                ]
              ]
            },
            {
              "heading": "What support can run if the queue is stuck",
              "type": "table",
              "columns": [
                "Action",
                "What it does"
              ],
              "rows": [
                [
                  "Queue unsynced invoices",
                  "Put one invoice, or every unsynced invoice, onto the QuickBooks queue."
                ],
                [
                  "Show sync status",
                  "Print the current queue picture — pending, processing, completed, failed."
                ],
                [
                  "Retry failed items",
                  "Reset failed items back to pending, up to the retry limit."
                ],
                [
                  "Unstick frozen items",
                  "Clear items left in processing. After three attempts they are marked failed; the rest go back to pending. Ask support to run this when the queue looks frozen."
                ]
              ]
            },
            {
              "heading": "Common problems",
              "type": "table",
              "columns": [
                "Problem",
                "Fix"
              ],
              "rows": [
                [
                  "Sales rep / employee never auto-creates (3180 blank name)",
                  "Invoice still syncs; only the sales-rep tag is lost. Create the employee and Sales Rep by hand in QuickBooks using the initials the log prints (first five letters, upper-cased)."
                ],
                [
                  "Unbounded retry on invalid item (3140)",
                  "The queue looks frozen. Stop the Connector, ask support to unstick items left in processing, create the missing item (or full-path sub-item) in the company file, then Resync."
                ],
                [
                  "Receipt cannot find its invoice",
                  "Stored TxnID is missing from this company file — often a mapping from a different company. Resync the INVOICE first, then the receipt."
                ],
                [
                  "Yard receipt: no active QB mapping",
                  "Resync the YARD INVOICE first so a yard_invoice mapping row is written, then resync the receipt."
                ],
                [
                  "Transaction locked (3176 / 3180)",
                  "Somebody has the record or file open in QuickBooks. Close it and retry."
                ],
                [
                  "Could not start QuickBooks / invalid ticket",
                  "Make sure QuickBooks is open on the correct company file with a user logged in. Items left in processing: ask support to unstick them."
                ],
                [
                  "No AR account for currency",
                  "Enable multi-currency and create the USD/EUR/EGP receivable account in that company file."
                ],
                [
                  "VAT missing in QuickBooks",
                  "Invoice-level VAT wins over a charge marked add_vat=1. Check the invoice, not just the charge."
                ]
              ]
            },
            {
              "heading": "QuickBooks error cheat sheet",
              "type": "table",
              "columns": [
                "Code",
                "Meaning"
              ],
              "rows": [
                [
                  "3090",
                  "Name contains an illegal character (a colon)."
                ],
                [
                  "3100 / 3170",
                  "Name already exists — recoverable, requery."
                ],
                [
                  "3140",
                  "Invalid reference — stale mapping, wrong company, or a sub-item path."
                ],
                [
                  "3176 / 3180",
                  "Locked / in use, or could not save a list element. Read the message."
                ],
                [
                  "500",
                  "A stored transaction could not be found in this file."
                ],
                [
                  "0x80040408 / 0x8004040D",
                  "Could not start QuickBooks / invalid session ticket — new session."
                ],
                [
                  "0x80040423",
                  "Unsupported QBXML version — configuration, not data."
                ]
              ]
            },
            {
              "heading": "Why it matters",
              "type": "callout",
              "style": "info",
              "content": "QuickBooks is where the company’s books actually live, so anything stuck in this queue is revenue or cash that has not landed. The worst failures are quiet: an invoice that arrives without its sales rep, or one record looping on an item reference and monopolising the Connector. Always check which company code you are looking at before believing a mapping. Always sync the invoice before its receipt. If the queue looks frozen, do not wait — it will not stop on its own."
            }
          ]
        }
      ]
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
  'arrow-right': '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
  'arrow-down': '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
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
const THEME_KEY = 'dejatech-docs-theme';
let DATA = null;
let activeTabId = null;
let activeModuleId = null;
let openTabId = null;
let themeTransitionTimer = null;

function currentTheme(){
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

function themeLogo(stacked){
  return `logos/dejatech-logo-white${stacked ? '-stacked' : ''}.png`;
}

function applyTheme(theme, animate = true){
  const nextTheme = theme === 'light' ? 'light' : 'dark';

  clearTimeout(themeTransitionTimer);
  if (animate) {
    document.documentElement.classList.add('theme-transitioning');
  } else {
    document.documentElement.classList.remove('theme-transitioning');
  }

  if (nextTheme === 'light') {
    document.documentElement.dataset.theme = 'light';
  } else {
    delete document.documentElement.dataset.theme;
  }

  try {
    localStorage.setItem(THEME_KEY, nextTheme);
  } catch (_) {}

  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    const label = nextTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    toggle.title = label;
    toggle.setAttribute('aria-label', label);
    const text = toggle.querySelector('.sr-only');
    if (text) text.textContent = label;
  }

  if (animate) {
    themeTransitionTimer = window.setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
    }, 450);
  }
}

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
function escapeHtml(value){
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderSection(section){
  let inner = '';

  switch(section.type){
    case 'text':
      inner = `<p class="text">${escapeHtml(section.content)}</p>`;
      break;

    case 'table': {
      const cols = section.columns || [];
      const rows = section.rows || [];
      inner = `<table class="doc-table"><thead><tr>${
        cols.map(c => `<th>${escapeHtml(c)}</th>`).join('')
      }</tr></thead><tbody>${
        rows.map(r => `<tr>${r.map(cell => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`).join('')
      }</tbody></table>`;
      break;
    }

    case 'rules':
      inner = `<ul class="rules-list">${
        (section.items || []).map(i => `<li>${escapeHtml(i)}</li>`).join('')
      }</ul>`;
      break;

    case 'filters':
      inner = `<div class="filter-fields">${
        (section.items || []).map(i => `<div class="filter-field"><span class="filter-field-icon">${svg('search', 12)}</span><span>${escapeHtml(i)}</span></div>`).join('')
      }</div>`;
      break;

    case 'steps':
      inner = `<ol class="steps-list">${
        (section.items || []).map((i, idx) => `<li><span class="step-num">${idx + 1}</span><span>${escapeHtml(i)}</span></li>`).join('')
      }</ol>`;
      break;

    case 'flow': {
      const steps = section.steps || [];
      const renderCard = (step, idx) => {
        const tone = step.tone || 'default';
        const actions = (step.actions || []).length
          ? `<div class="flow-chips">${step.actions.map(a => `<span class="flow-chip">${escapeHtml(a)}</span>`).join('')}</div>`
          : '';
        const outcomes = (step.outcomes || []).length
          ? `<ul class="flow-outcomes">${step.outcomes.map(o => `<li>${escapeHtml(o)}</li>`).join('')}</ul>`
          : '';

        return `<div class="flow-card flow-card--${tone}">
          <div class="flow-card-head">
            <span class="flow-badge">${escapeHtml(step.badge || `STEP ${idx + 1}`)}</span>
            <span class="flow-icon">${svg(step.icon || 'info', 13)}</span>
          </div>
          <h4 class="flow-title">${escapeHtml(step.title || '')}</h4>
          ${step.desc ? `<p class="flow-desc">${escapeHtml(step.desc)}</p>` : ''}
          ${actions}
          ${outcomes}
        </div>`;
      };

      const line1 = steps.slice(0, 3);
      const line2 = steps.slice(3, 6);

      const renderLine = (items, startIdx) => {
        return items.map((step, idx) => {
          const cardHtml = renderCard(step, startIdx + idx);
          const isLast = idx === items.length - 1;
          const arrowHtml = isLast ? '' : `<div class="flow-arrow" aria-hidden="true">${svg('arrow-right', 15)}</div>`;
          return cardHtml + arrowHtml;
        }).join('');
      };

      inner = `<div class="flow-diagram" role="region" aria-label="${escapeHtml(section.heading || 'User flow')}">
        <div class="flow-line">
          ${renderLine(line1, 0)}
        </div>
        <div class="flow-connector" aria-hidden="true">
          <span class="flow-connector-line"></span>
          <span class="flow-connector-badge">Next · Proceed to Line 2 ${svg('arrow-down', 11)}</span>
          <span class="flow-connector-line"></span>
        </div>
        <div class="flow-line">
          ${renderLine(line2, 3)}
        </div>
      </div>`;
      break;
    }

    case 'callout': {
      const style = section.style || 'info';
      inner = `<div class="callout ${style}">${svg(CALLOUT_ICON[style] || 'info', 18)}<span>${escapeHtml(section.content)}</span></div>`;
      break;
    }

    default:
      inner = `<p class="text">${escapeHtml(section.content || '')}</p>`;
  }

  return `<div class="section-card" data-heading="${escapeHtml((section.heading || '').toLowerCase())}" data-body="${escapeHtml(stripHtml(inner).toLowerCase())}">
      ${section.heading ? `<h3>${escapeHtml(section.heading)}</h3>` : ''}
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
      <div class="nav-group-header" data-id="${tab.id}" role="button" tabindex="0" aria-expanded="${isOpen}">
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
    const toggleGroup = () => {
      const id = header.getAttribute('data-id');
      openTabId = (openTabId === id) ? null : id;
      navList.querySelectorAll('.nav-group').forEach(group => {
        const isOpen = group.getAttribute('data-id') === openTabId;
        group.classList.toggle('open', isOpen);
        group.querySelector('.nav-group-header')?.setAttribute('aria-expanded', String(isOpen));
      });
    };

    header.addEventListener('click', toggleGroup);
    header.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleGroup();
      }
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
          <img class="home-logo" id="homeLogoImg" src="${themeLogo(true)}" alt="Dejatech">
          <p class="home-tagline">Product documentation</p>
          <p class="home-hint">Choose a module from the sidebar to explore the documentation.</p>
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
function pageUrl(hash){
  const base = location.href.split('#')[0];
  return hash ? `${base}#${String(hash).replace(/^#/, '')}` : base;
}

function goHome(){
  clearLastRoute();
  // Avoid location.hash = '' on file:// — Chrome treats it as an unsafe frame navigation.
  history.replaceState(null, '', pageUrl(''));
  renderHome();
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

  applyTheme(currentTheme(), false);
  document.getElementById('themeToggle').addEventListener('click', () => {
    applyTheme(currentTheme() === 'dark' ? 'light' : 'dark');
  });

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
      history.replaceState(null, '', pageUrl(`${saved.tabId}/${saved.moduleId}`));
    }
  }
  handleHashChange();
} catch (err) {
  console.error(err);
  showLoadError(err && err.message ? err.message : String(err));
}
