REM Please change componentName and run the script in the main WebApp localization.
REM Example: componentName=SomeComponent
REM Script should build all the neccessary files structure to begin work with it.
CLS
SET childFolderName=sex-detection
SET directiveName=sex-detection
SET directiveFolderName=directives

REM Components
REM ng g c components/%componentsFolderName%/%componentName% --spec false

REM ng g c components/%componentName% --spec false
ng g d %directiveFolderName%/%childFolderName%/%directiveName% --spec false

pause
