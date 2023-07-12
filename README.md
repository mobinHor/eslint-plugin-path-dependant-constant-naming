# eslint-plugin-path-dependant-constant-naming
Eslint rule to add constraints to declare constants dependant to file PATH from desired ROOT

### constants

We got a structure for constants that includes PARENT , CHILD and GRAND-CHILD

**`PARENT`**
Every PARENT created is representing a DOMAIN in entire app

example : ORDER is a huge domain in the APP and accordingly has its own PARENT in this structure.

- Do NOT create new PARENT without coordination.

**`CHILD`**
Every CHILD is representing a SUB-DOMAIN under existing PARENT.

example : we got a _DOMAIN_ named claim , that has two logical sub-domains called VEHICLE and REMEDY which are
created under claim PARENT.
The common constants(between children) would be written inside ROOT(index.ts) and those which
are specific would be written inside the related file(vehicle/remedy)

- Do NOT create new sub-directory without coordination.

**`GRAND-CHILD`**
Now we are on THIRD level of our structure, here is the END of domain separation.
Feel free to create new Directories, but be 100% sure about the domain separation you are doing here.
The common constants(between grand children) would be written inside ROOT(index.ts) and those which
are specific would be written inside the related file(vehicle/remedy/status)

**`CONSTRAINTS`**
the naming of the constant should start with the absolute path from /constants/ to where it is written

example : consider a constant sheltered in constants/order/third , and the constant is representing a
specific TAG(ready for whatever) for example, the name of the constant should be this : ORDER_THIRD_TAG_READY_FOR_WHATEVER
if the constant is an ARRAY or an OBJECT the name should be in camelCase and obey the rule above(orderThirdTagsList)

- always check the existence of constant you are defining , if there is not , then feel free to add one.
- The structure should not exceed THREE level , the GRAND-CHILD is end-node of the tree.
- Obey the naming convention, Obey the Structure.
- Single value constants should be defined first and the array and object values should be under them
- All constants should be named-export(not default exported)
