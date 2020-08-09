# ![CW] ColumnsWizard Release Notes

### Version 6.1.2 - 7/03/2019 
- Add manifest.json - WebExtension

### Version 6.1.1 - 7/03/2019 - skipped
- Update for TB60 compatibility
- Format code to CommonJS
- Introduce eslint/Mozilla rules
- Use new syntax Cc, Ci, Cu
- Use const { Services } import style 
- Fix style and use warnings
- Update zh-CN locale

### Version 6.1 - 12/03/2018
- Added compatibility with Thunderbird 57+.
- Italian (it) locale improved.
- Custom column editor window resizing fixed.
- Added a fixed value to custom columns height.
- The mail header in custom column editor is no more forced to be lowercase.
- When editing an header the labels are preserved also with IMAP servers that don't save them.
- Correspondents column added in the default columns settings.
- Added a debug system.
- In editing a mail header with a fixed list, the current selected value is checked in the menu and, if selected again, it will be emptied.
- In editing a custom column, the fixed list type is now preserved.
- Mail header editing UI improved. 
- French (fr) locale updated.
- Dutch (nl) locale updated.
- German (de) locale updated.

### Version 6.0.4 - 02/09/2016
- License statement fixed. Now only license GPL v3.0 is valid.


### Version 6.0.3 - 08/06/2016
- Minor bugs fixed.


### Version 6.0.2 - 07/06/2016
- Added missing default preference.
- Improved preference engine.


### Version 6.0.1 - 30/05/2016
- Better toolbar button positioning at first run.
- Preference window tabs order changed.
- Fixed a bug in preference handling with Thunderbird version 45.


### Version 6.0 - 29/09/2015
- Added a toolbar button to open the preference panel.
- Custom columns values can now be editable on a per message basis. It will be modified the corrispondent mail message header. Proposed by David Hedlund on an idea from Header Tools Lite addon.
- Fixed a bug in resizing columns under some circumstances after setting the CW Default. Thanks to Dalai for reporting and debugging this problem.
- Serbian (sr) and russian (ru) translations removed because no more maintained.


### Version 5.2 - 31/08/2015
- The custom columns are now searchable in the Thunderbird advanced search window.
- Minor bugfixes.
- Minor user interface improvements in the preferences window.


### Version 5.1 - 26/07/2015
- Release notes added in the preference info tab.
- The custom columns in the preference tab are now sorted alphabetically. New Custom Columns are added at the end of the list and then sorted at the next preference window reopening.
- License file added.
- A custom column now could have an image as the column name.


### Version 5.0.3 - 07/06/2015
- Custom column with numbers are now correctly sorted.
- The x-spam-score bundled custom column is now sorted as a number.


### Version 5.0.2 - 11/04/2015
- Added confirm messages before saving / resetting the folder columns.


### Version 5.0.1 - 06/02/2015
- Fixed a bug in adding a new custom column.


### Version 5.0 - 04/02/2015
- Now it's possible to define the default column settings for new folders.
- Added the save as CW default columns menu item (accessible from the folder columns picker menu).
- Added the reset to CW default columns menu item (accessible from the folder columns picker menu).
- Added the settings panel to set the default columns for new folder.
- Added the settings panel to add/delete/edit any custom columns.
- Added the x-spam-score bundled custom column (Used by SpamAssassin http://spamassassin.apache.org/).
- No more use of javascript eval function.


### Version 4.0 - 04/07/2014
- Added the "Info" tab.
- Embedded addon icon.
- Added bcc custom column.
- Added reply-to custom column.
- Added the x-original-from custom column (See DMARC specification http://www.dmarc.org/).
- Added the content-base custom column.
- Fixed a bug in resizing custom columns.


### Version 3.1 - 22/02/2014
- Added the option to show the "Recipient" column in the conversation tab.
- Added chinese translation (zh-CN), thanks yfdyh000 (from BabelZilla.org).
- Added serbian translation (sr), thanks DakSrbija (from BabelZilla.org).
- Added dutch translation (nl), thanks markh (from BabelZilla.org).


### Version 3.0.1 - 01/01/2014
- Added background color and border to the Custom Columns tab warning message.


### Version 3.0 - 30/12/2013
- It's now possible to show custom columns. The first one shows the mail cc header.
- Added french translation (fr), thanks Goofy (from BabelZilla.org).
- Added russian translation (ru), thanks Salted (from BabelZilla.org).


### Version 2.1.4 - 22/12/2013
- If a column is removed from one conversation tab, it's not more added if switched again to that tab.


### Version 2.1.3 - 22/12/2013
- Internal release.


### Version 2.1.2 - 21/12/2013
- Minor bug fixing.


### Version 2.1.1 - 21/12/2013
- Internal release.


### Version 2.1 - 21/12/2013
- Internal release.
- Changed name to "ColumnsWizard" (previous was ColumnCV).
- Added german translation (de), thanks Axel Grude.


### Version 2.0 (as ColumnCV) - 18/12/2013
- Added a preferences panel.
- Now is possibile to choose which column to show between Location, Account and Attachment.


### Version 1.0 (as ColumnCV) - 17/12/2013
- First release.


[CW]: rep-resources/images/mzcw-icon.png