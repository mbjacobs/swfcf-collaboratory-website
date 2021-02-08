# swfcf-collaboratory-website
This repository is a product of the SI 699 User-Centered Agile Development W2021 class for the Southwest Florida Community Foundation (Collaboratory).

## Steps to Contribute

### Setting up the Repository

1. Fork this repository (button in upper righthand corner) to create a copy of the repo in your Github account.
2. Locate forked repo and clone it to your local machine using either the CLI or Github Desktop.
3. Navigate into the location of the directory on your machine: `cd swfcf-collaboratory-website`.
4. Set the remote upstream to this main repository.
   - Check the current remote configuration: `git remote -v` and you should see the following output:
     ```
     > origin  https://github.com/YOUR_USERNAME/swfcf-collaboratory-website.git (fetch)
     > origin  https://github.com/YOUR_USERNAME/swfcf-collaboratory-website.git (push)
     ```
   - Add the main repository as the upstream repo: `git remote add upstream https://github.com/mbjacobs/swfcf-collaboratory-website.git`.
   - To confirm configuration is correct, run `git remote -v` again and check whether the upstream URLs appears below the origin URLs, as seen [here](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork).
   
### Working on Code

1. Checkout a new or existing branch with a descriptive name.
2. Work on branch.
3. Commit locally often and push to origin (`git  push origin [BRANCH_NAME]`) to save work.
4. When code that is pushed to your account's origin repo is ready to merge into the main upstream repository, create a pull request with a short description of the work completed. See [the docs](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork) for help.
5. Ask another team member to review the request and approve the merge.
   

