import { createClient } from '@supabase/supabase-js'

// Usar tus credenciales de Supabase
const supabaseUrl = 'https://ehkgpdhncvdrnetozhxi.supabase.co'; // Cambia esto con tu URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoa2dwZGhuY3Zkcm5ldG96aHhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1NDQ0ODIsImV4cCI6MjA0NzEyMDQ4Mn0.w-aYXI5AwRtSXd1Ymrf8sfU8bdMOAqQtTuvk3-k0-VM'; // Usa la API Key de Supabase

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;