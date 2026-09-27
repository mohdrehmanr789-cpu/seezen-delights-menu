# Starter Veg Image Mapping

## Scope
- Extract the 30 uploaded JPG photos from the ZIP.
- Match each photo to the existing Starter Veg dish with the same filename/dish name.
- Store the photos as bundled project assets so they work in production deployments.
- Replace only the Starter Veg image-selection mapping; preserve all dish names and avoid duplicates.

## Validation
- Confirm every Starter Veg dish has exactly one matching uploaded photo.
- Verify image files are valid and retain their original dimensions/aspect ratios.
- Check the menu in desktop and mobile views and confirm no other category or styling changed.

## Technical details
- Add a filename-to-image import map in the existing dish image module.
- Keep the current category cover behavior while making each Starter Veg dish resolve to its exact photo.
