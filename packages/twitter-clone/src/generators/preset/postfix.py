import os

def postfix_files(starting_directory, postfix):
    for root, dirs, files in os.walk(starting_directory):
        for filename in files:
            old_path = os.path.join(root, filename)
            new_filename = filename + postfix
            new_path = os.path.join(root, new_filename)
            os.rename(old_path, new_path)
            print(f"Renamed: {old_path} -> {new_path}")

# Get the current directory
current_directory = "./files/src"
# Example postfix
postfix = ".template"
postfix_files(current_directory, postfix)
