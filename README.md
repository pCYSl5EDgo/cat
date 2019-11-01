# cat

This GitHub Action reads text from path and stores outputs.text with the content.

## Usage

### Pre-requisites
Create a workflow `.yml` file in your repositories `.github/workflows` directory. An [example workflow](#example-workflow) is available below. For more information, reference the GitHub Help Documentation for [Creating a workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file).

### Inputs

* `path` - A file to read from

### Outputs

* `text` - A string value to hold the content

### Example workflow

```yaml
name: Example

on: push

jobs:
  echo:
    runs-on: ubuntu-latest
    
    steps:
    - run: echo -n -e "HELLO\n !\n World!" > text.txt

    - uses: pCYSl5EDgo/cat@master
      id: hello
      with:
        path: text.txt

    - run: echo $TEXT
      env:
        TEXT: ${{ steps.hello.outputs.text }}
```

## License
The scripts and documentation in this project are released under the [MIT License](LICENSE)