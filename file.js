window.DOCS_DATA = {
  "appTitle": "Documentation",
  "appSubtitle": "Product knowledge base",
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
              "content": "The master registry of every system user — the login identity, role assignment, and company-line access behind every document, invoice, booking, and container movement created in the system. Every operational record stores a user_id, so this screen is the anchor for accountability and audit trails."
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
              "content": "Deleting a user permanently removes the account. Historical documents (quotations, BLs, invoices, activity logs) keep their stored user_id, but the deleted user disappears from staff dropdowns — prefer Inactive over Delete for departed staff when audit continuity matters."
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
                  "JSON payload: file path, line number, exception class, stack trace"
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
              "content": "Opening a grouped entry shows the latest occurrence with user/role/company context, full request details, and the complete, un-truncated stack trace. A Download action exports a plain-text diagnostic file (system-log-{id}.txt) formatted for developer or AI-assisted troubleshooting."
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
              "content": "The master catalogue of every billable line item the company can place on an Invoice or Debit (Cost) document, such as Ocean Freight, THC, Storage, or Administration Fee. Documents reference a row from this list rather than accepting a free-typed charge name. The catalogue is scoped by company_id, so each company maintains its own list."
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
                  "old_code, per-company editable code, terminal_id, port_id, type_id, company_id"
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
              "content": "Defines the conversion rate for each foreign Currency during an inclusive Date From / Date To period. Rates are global—there is no company_id—so every company shares the same periods. EGP is excluded because no EGP-to-EGP rate is needed."
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
                  "desc": "Rates are global (no company_id) and apply across all companies.",
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
                "The same activity twice in a row is normally rejected — import raises \"Invalid movement sequence ... Expected: <allowed codes>\".",
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
                  "The <Charge> selling rate must be greater than or equal to the cost."
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
                  "Duplicate charge type: <Charge> for the same equipment <size>ft already exists."
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

    case 'filters':
      inner = `<div class="filter-fields">${
        (section.items || []).map(i => `<div class="filter-field"><span class="filter-field-icon">${svg('search', 12)}</span><span>${i}</span></div>`).join('')
      }</div>`;
      break;

    case 'steps':
      inner = `<ol class="steps-list">${
        (section.items || []).map((i, idx) => `<li><span class="step-num">${idx + 1}</span><span>${i}</span></li>`).join('')
      }</ol>`;
      break;

    case 'flow': {
      const steps = section.steps || [];
      const renderCard = (step, idx) => {
        const tone = step.tone || 'default';
        const actions = (step.actions || []).length
          ? `<div class="flow-chips">${step.actions.map(a => `<span class="flow-chip">${a}</span>`).join('')}</div>`
          : '';
        const outcomes = (step.outcomes || []).length
          ? `<ul class="flow-outcomes">${step.outcomes.map(o => `<li>${o}</li>`).join('')}</ul>`
          : '';

        return `<div class="flow-card flow-card--${tone}">
          <div class="flow-card-head">
            <span class="flow-badge">${step.badge || `STEP ${idx + 1}`}</span>
            <span class="flow-icon">${svg(step.icon || 'info', 13)}</span>
          </div>
          <h4 class="flow-title">${step.title || ''}</h4>
          ${step.desc ? `<p class="flow-desc">${step.desc}</p>` : ''}
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

      inner = `<div class="flow-diagram" role="region" aria-label="${section.heading || 'User flow'}">
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
