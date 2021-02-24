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

5. Create and activate a [virtual environment](https://docs.python.org/3/library/venv.html).
6. Do a pip install from requirements.txt. You should see the following list of modules:
```
(myenv) $ pip freeze
(myenv) $ pip install -r requirements.txt
(myenv) $ pip freeze

asgiref==3.3.1
Django==3.1.7
django-cors-headers==3.7.0
djangorestframework==3.12.2
mysqlclient==2.0.3
pytz==2021.1
sqlparse==0.4.1
```
7. If any modules are missing, install with pip or another command line tool; you'll likely encounter error messages when trying to run things that will tell you what's missing.
   
### Working on Code

1. Make sure your repository is synced with upstream by following the process [here](https://devdojo.com/alexg/how-to-synchronize-your-github-fork).
2. Checkout a new or existing branch with a descriptive name.
3. Work on branch.
4. Commit locally often and push to origin (`git  push origin [BRANCH_NAME]`) to save work.
5. When code that is pushed to your account's origin repo is ready to merge into the main upstream repository, create a pull request with a short description of the work completed. See [the docs](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork) for help.
6. Ask another team member to review the request and approve the merge.
