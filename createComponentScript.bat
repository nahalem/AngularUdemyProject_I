REM Please change componentName and run the script in the main WebApp localization.
REM Example: componentName=SomeComponent
REM Script should build all the neccessary files structure to begin work with it.
CLS
SET childFolderName=examples
SET componentName=directives-component
SET componentsFolderName=directives-component

REM Components
REM ng g c components/%componentsFolderName%/%componentName% --spec false

REM ng g c components/%componentName% --spec false
ng g c components/%childFolderName%/%componentName% --spec false




REM Model
REM ng g cl components/%componentsFolderName%/models/%componentName% --spec false

REM ng g c components/test-components/communication/viewparent parent  --spec false
REM ng g c components/test-components/communication/view-child-communication/child  --spec false

REM przyklad
REM ng g component components/[nazwa_komponentu]




REM SET mypath=%~dp0
REM SET currentPath=%mypath:~0,-1%
REM SET mainModulePath=\src\app\components\
REM SET componentsFolderName=test

REM cd %mainModulePath%
REM echo %mainModulePath%

REM SET currentModulePath=%currentPath%%mainModulePath%%componentName%

REM Components
REM call ng generate c %componentsFolderName%/%componentName% --module --spec false REM nie tworzy plików testowych

REM Model
REM call ng generate cl %componentsFolderName%/%componentName%/models/%componentName%


REM Components
REM ng g c components/%componentsFolderName%/%componentName% --spec false

REM Model
REM ng g cl components/%componentsFolderName%/models/%componentName% --spec false

pause
