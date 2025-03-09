@echo off

REM Check if the .devcontainer\devcontainer.env file exists
if exist ".devcontainer\devcontainer.env" (
    echo The .devcontainer\devcontainer.env file exists
) else (
    echo Please fill out the values in .devcontainer\devcontainer.env and rebuild the container
    copy ".devcontainer\devcontainer.env.example" ".devcontainer\devcontainer.env"
)