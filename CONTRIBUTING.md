## Contributing

### Adding the upstream repo

When working with Git, there are 3 main repositories (versions of your project) you have to keep track of:
- local: this is your local project, where you make changes first
- origin: this is your forked repository on GitHub, which only you have permission to edit, and this is where you push your changes first
- upstream: this is the main repository, the one only the project owner has permission to merge and accept pull request. The only way you can add changes into this project is by submitting a **pull request** and having the project owner review it and accept it. 

First, do a `git remote -v`. This should show you only your `origin` repo. It should point to a URL containing your username.
Then, add the upstream repository: `git remote add upstream git@github.com:rarmatei/progress-tracker.git`

Now, if you do a `git remote -v` it should show you two remotes: an origin pointing to a URL with your username in it, and an upstream, pointing to `git@github.com:rarmatei/progress-tracker.git`.

### Starting work:

1. Before starting work on any changes make sure you pull the latest changes on the master branch from **upstream**:

`git pull upstream master`

2. Create a new branch for your changes, based on the master branch you just updared:
`git branch addTopicsApiEndpoint master` (make sure you replace "addTopicsApiEndpoint" with something else, indicative of the work you're doing)

3. Switch to that branch:
`git checkout addTopicsApiEndpoint`

### Working on the branch

Do your changes, commiting them as you work:
`git add .`
`git commit -m "my commit message"`

### Ready to submit

Before you submit your changes, make sure you get any latest changes that have been merged in to the upstream repo:

```
git fetch
git rebase upstream/master
```

If there are any merge conflicts, this is the part where you will be asked to solve them.

Once you are ok with your changes push them to your forked repository:
`git push -u origin addTopicsApiEndpoint`

Then go to your forked repository's GitHub page where you should now see a button to add a PR.

**Important:** Make sure you give your pull request a good title, summarising the work you've done. Also enter a small description, and make sure you reference the original issue you've solved. This can be done by typing the hastag sign **#** and then selecting your issue name. This will create a link between the pull request and the issue, so it can be easily tracked. It will also close the issue, once the pull request gets merged in.
