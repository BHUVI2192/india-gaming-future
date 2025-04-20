
-- Create an enum for app roles
CREATE TYPE app_role AS ENUM ('admin', 'user', 'moderator');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    UNIQUE (user_id, role)
);

-- Enable Row Level Security
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Policy to allow users to manage their own roles
CREATE POLICY "Users can manage their own roles" 
ON public.user_roles 
FOR ALL 
USING (auth.uid() = user_id);
